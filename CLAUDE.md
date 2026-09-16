# Marp スライドプロジェクト

Bun と Marp CLI で Markdown スライドを作成・出力する。
`AGENTS.md` はこのファイルへのシンボリックリンク。共通の指示はここで管理する。

## 配置と作成ルール

- スライド: `slides/*.md`。Front Matter に `marp: true` を指定する。
- 画像: `slides/images/` に置き、スライドから `./images/filename.png` で参照する。
- カスタムテーマ: `themes/*.css`。Marp の設定は `.marprc.yml`。
- ビルド出力: `dist/`（Git 管理対象外）。
- スライド作成・修正時は [.claude/skills/creating-marp-slides/SKILL.md](.claude/skills/creating-marp-slides/SKILL.md) を参照する。
  情報量・レイアウトの指針とトラブルシューティングは同ディレクトリの `references/` にある。

## 開発と検証

コマンドはプロジェクトルートで実行する。依存関係の導入は `bun install`。

| コマンド | 用途 |
| --- | --- |
| `bun run preview` | プレビュー（`http://localhost:8080/slides/<name>.md`） |
| `bun run build` | HTML + PDF を出力 |
| `bun run build:html` / `build:pdf` / `build:pptx` | 指定形式を出力 |
| `bun run lint` | スライドの Markdown と `scripts/` の JavaScript を検証 |
| `bun run lint:js` | JavaScript のみ検証 |

スライド変更時は lint に加え、プレビューで画像・見切れ・レイアウトを確認する。
ビルド変更時は対象形式の出力を確認する。実行できなかった検証は報告する。
セットアップや基本操作は [README.md](README.md) を参照する。

## Claude Code 用エージェント

Claude Code では、依頼に応じて `.claude/agents/` のエージェントを使用する:

- `slide-creator`: 新規スライド作成
- `slide-reviewer`: 品質・表示の確認
- `slide-builder`: ビルド・エクスポート
