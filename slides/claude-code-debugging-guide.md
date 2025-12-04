---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

# Claude Code デバッグ & サブエージェント監視ガイド

**開発者のためのトラブルシューティング**

---

## このスライドの目的

Claude Code を使用する開発者に向けて：

- **デバッグ方法**の紹介
- **サブエージェントの透明性**を高める手法
- **スキル使用状況**の確認方法

<!--
【発表者向け補足】
このスライドは PR #26 での実際の試行錯誤から得られた知見をまとめたものです。
トラブルシューティングで役立つコマンド:
- /doctor: インストール状態と設定問題を検証
- /bug: Anthropic へ問題を報告
- /feedback: フィードバック送信
-->

---

<!-- _class: lead -->

## 課題：サブエージェントの透明性

---

## サブエージェントは何をしているか見えにくい

- `Task` ツールで起動されるサブエージェント
- 内部でどのスキルを参照したか不明
- デバッグが困難

**→ どうやって可視化する？**

---

<!-- _class: lead -->

## 解決策1：CLI デバッグオプション

---

## --verbose オプション

詳細なログ出力を有効化：

```bash
claude --verbose
```

- 各ターンの完全な処理結果を表示
- ツール実行の詳細が確認可能

---

## --debug オプション

デバッグモードを有効化（カテゴリフィルタ可能）：

```bash
# 全カテゴリのデバッグ出力
claude --debug

# 特定カテゴリのみ
claude --debug api,hooks

# 特定カテゴリを除外
claude --debug '!statsig,!file'
```

---

## デバッグログの出力先

`~/.claude/debug/` にセッションごとのログファイルが生成：

```
~/.claude/debug/
├── abc123-xxxx-xxxx.txt
├── def456-xxxx-xxxx.txt
└── ...
```

**セッション ID でファイルが分かれる**

---

## デバッグログの出力例

```
[DEBUG] Watching for changes in setting files...
[DEBUG] [LSP MANAGER] initializeLspServerManager()
[DEBUG] update: Starting update check
[DEBUG] Found 0 plugins (0 enabled, 0 disabled)
[DEBUG] Getting matching hook commands for SessionEnd
[DEBUG] Matched 0 unique hooks for query "other"
```

---

## デバッグで確認できる情報

| カテゴリ | 内容 |
|---------|------|
| `settings` | 設定ファイルの監視・読み込み |
| `hooks` | Hook のマッチング処理 |
| `api` | API 通信 |
| `file` | ファイル操作の詳細 |
| `LSP` | Language Server の初期化 |

**カテゴリフィルタで必要な情報だけを表示**

---

<!-- _class: lead -->

## 解決策2：PostToolUse Hook

---

## PostToolUse Hook でログを取る

`.claude/settings.json` に hook を設定：

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "mkdir -p ~/.claude/debug && ..."
          }
        ]
      }
    ]
  }
}
```

<!--
【発表者向け補足】
利用可能な Hook イベント:
- SessionStart: セッション開始時
- SessionEnd / Stop: セッション終了時
- UserPromptSubmit: ユーザー入力送信時
- PreToolUse: ツール実行前
- PostToolUse: ツール実行後

matcher の例:
- "*": すべてのツール
- "Bash": Bash ツールのみ
- "Task": Task（サブエージェント）のみ
- "Read,Write": 複数指定も可能
-->

---

## Hook の設定例

📎 [GitHub で完全版を見る](https://github.com/toku345/marp-slides/blob/2ef246528d912398298b4c14d9025d7611f705b5/.claude/settings.json)

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "*",
      "hooks": [{
        "type": "command",
        "command": "jq -r ... >> tool-usage.log"
      }]
    }]
  }
}
```

**ポイント**: `jq` で stdin の JSON をパースしてログ出力

---

## ログ出力例

```
2025-12-04 15:30:12 | Tool: Bash | Session: abc123
2025-12-04 15:30:15 | Tool: Read | Session: abc123
2025-12-04 15:30:18 | Tool: Write | Session: abc123
2025-12-04 15:30:22 | Tool: Task | Session: abc123
```

`~/.claude/debug/tool-usage.log` に記録される

---

<!-- _class: lead -->

## よくあるミス
### `$CLAUDE_TOOL_NAME` は動かない

---

## ドキュメントを見て、こう書きたくなる

```bash
# 環境変数でツール名を取得... できそう？
echo "$CLAUDE_TOOL_NAME" >> log.txt
```

**結果**: 空文字が出力される 😢

---

## 理由：Hook は stdin 経由で JSON を受け取る

Claude Code の hooks は**環境変数ではなく stdin で JSON を渡す仕様**

```bash
# ✅ 正しい方法：jq で JSON をパース
jq -r '.tool_name' >> log.txt
```

<!--
【発表者向け補足】
実際の試行錯誤の経緯:
1. 最初: $CLAUDE_TOOL_NAME を使用 → 空文字
2. 次: read json で stdin を読み取り → ブロック（動かない）
3. 次: json=$(cat) で stdin を読み取り → 動作せず
4. 最終: jq に直接パイプ → 成功！

この問題は GitHub Issue #9567, #5489 でも報告されています。
-->

---

## Hook に渡される JSON データ

- `session_id`
- `tool_name`
- `tool_input`
- `tool_response`
- `hook_event_name`

**jq でパースして必要な情報を抽出**

<!--
【発表者向け補足】
JSON データの全フィールド:
- session_id: セッション識別子
- transcript_path: 会話履歴ファイルのパス
- cwd: 作業ディレクトリ
- permission_mode: 権限モード (default, acceptEdits, bypassPermissions など)
- hook_event_name: イベント名 (PostToolUse など)
- tool_name: ツール名 (Bash, Read, Write, Task など)
- tool_input: ツールへの入力（オブジェクト）
- tool_response: ツールからの応答（オブジェクト）
- tool_use_id: ツール使用の一意識別子

デバッグ時は cat > ~/.claude/debug/stdin-debug.json で
stdin の内容を直接ファイルに保存して確認すると便利です。
-->

---

<!-- _class: lead -->

## 解決策3：サブエージェント定義

---

## サブエージェント定義でスキル報告を指示

`.claude/agents/*.md` のマークダウン本体がシステムプロンプト：

```markdown
## 出力

- 作成したファイルのパス
- **使用したスキル**: 参照したスキル名を明記

## 参照したスキルの報告

最終レポートには必ず以下を含めること:
- [スキル名]: [参照セクション]
```

---

## Front Matter フィールド（参考）

サブエージェントの front matter:

- `name`（必須）
- `description`（必須）
- `tools`
- `model`
- `skills`
- `permissionMode`

**注意**: `instructions` フィールドは存在しない

---

<!-- _class: lead -->

## 設定ファイルの優先順位

---

## 優先順位（高→低）

1. `managed-settings.json`（最優先）
2. コマンドライン引数
3. `.claude/settings.local.json`
4. `.claude/settings.json`
5. `~/.claude/settings.json`（最低優先）

**ローカル設定は `.local.json` で上書き可能**

<!--
【発表者向け補足】
settings.json で設定できる主な項目:
- hooks: フック設定
- permissions: ツール実行の許可設定（allow/deny）
- mcpServers: MCP サーバー設定
- env: 環境変数

.claude/settings.local.json は .gitignore に追加して
個人の開発環境固有の設定を管理するのがおすすめです。
-->

---

<!-- _class: lead -->

## 設定変更の反映

---

## 設定変更後の確認方法

- 設定変更後は **セッション再起動を推奨**
- `/hooks` コマンドで現在の設定を確認可能
- 動作が不安定な場合は Claude Code を再起動

---

<!-- _class: lead -->

## まとめ

---

## デバッグの4つのポイント

1. **--verbose / --debug** で CLI の詳細出力を有効化
2. **PostToolUse hook + jq** でツール使用をログ
3. **サブエージェント定義**でスキル報告を指示
4. **環境変数ではなく stdin の JSON をパース**

---

## 参考リンク

- **Claude Code Hooks**:
  https://docs.anthropic.com/en/docs/claude-code/hooks

- **Claude Code Sub-agents**:
  https://docs.anthropic.com/en/docs/claude-code/sub-agents

---

<!-- _class: lead -->

# Happy Debugging! 🛠️
