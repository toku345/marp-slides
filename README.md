# Marp スライドプロジェクト

このプロジェクトは [Marp (Markdown Presentation Ecosystem)](https://marp.app/) を使用して、マークダウンベースのプレゼンテーションスライドを作成・管理するためのものです。

**デモ**: https://toku345.github.io/marp-slides/

## 特徴

- **マークダウンでスライド作成**: テキストエディタで簡単にプレゼンテーション作成
- **バージョン管理対応**: マークダウンファイルなのでGitで管理しやすい
- **複数形式に出力**: HTML、PDF、PowerPointに対応
- **カスタマイズ可能**: CSSでテーマを自由にカスタマイズ
- **リアルタイムプレビュー**: VS Code拡張やプレビューサーバーで即座に確認

## プロジェクト構成

```
marp-slides/
├── .claude/
│   ├── agents/           # Claude Code用Subagents
│   │   ├── slide-creator.md    # スライド新規作成
│   │   ├── slide-reviewer.md   # 品質チェック・視覚検証
│   │   └── slide-builder.md    # ビルド・出力
│   └── skills/
│       └── marp/         # Claude Code用Marpスキル（プロジェクト固有ルール）
├── slides/               # スライドファイル（.md）
│   └── images/           # スライド用画像（CLI・VS Code両対応）
├── scripts/              # ビルドスクリプト（Biome で lint）
├── themes/               # カスタムテーマ（.css）
├── assets/               # その他のリソース
└── dist/                 # 出力先（HTML/PDF/PPTX）
```

### 画像配置について

スライドで使用する画像は **`slides/images/`** に配置してください。この配置により：

- CLI プレビュー (`bun run preview`) で正しく表示される
- VS Code Marp 拡張機能のプレビューでも正しく表示される
- 相対パス `./images/filename.png` で参照可能

詳細は [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163) を参照。

## セットアップ

### 前提条件

- Bun (>= 1.3.2)

### プロジェクトのセットアップ

```bash
# 依存関係をインストール
bun install
```

### VS Code 拡張機能（推奨）

VS Code で「Marp for VS Code」拡張機能をインストールすると、リアルタイムプレビューが可能になります。

[Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

## 学習リソース

### Marp チュートリアルスライド

Marp初心者向けの包括的なチュートリアルが含まれています：

- **ファイル**: `slides/marp-tutorial.md`
- **内容**: インストールから出力まで、Marpの使い方を26ページで解説
- **対象**: Marpを初めて使う方

チュートリアルをプレビューするには：

```bash
bun run preview
# http://localhost:8080/slides/marp-tutorial.md にアクセス
```

チュートリアルをPDFで出力するには：

```bash
bun run build:pdf
```

## 基本的な使い方

### 方法 1: Claude Code を使う（推奨）

Claude Code を使うと、自然言語でスライド作成ができます：

```bash
# Claude Code を起動
claude

# スライド作成を依頼
> 「Claude Code の新機能」について新しいスライドを作成してください
```

slide-creator エージェントが自動的に起動し、テンプレートに沿ったスライドを生成します。

**トリガーフレーズ例:**
- 「新しいスライドを作成して」
- 「〇〇についてスライドを作成してください」

### 方法 2: 手動で作成

#### 1. スライドを作成

`slides/` ディレクトリに `.md` ファイルを作成します。

```markdown
---
marp: true
theme: default
paginate: true
---

# タイトルスライド

あなたの名前

---

## 2枚目のスライド

- 箇条書き1
- 箇条書き2
- 箇条書き3
```

#### 2. プレビューで確認

プレビューサーバーを起動して、ブラウザで確認しながら編集：

```bash
# プレビューサーバー起動
bun run preview
```

VS Code の Marp 拡張機能を使うとリアルタイムプレビューも可能です。

#### 3. エクスポート

完成したスライドを各種形式でエクスポート：

```bash
# すべての形式でビルド（HTML + PDF）
bun run build

# HTML のみ
bun run build:html

# PDF のみ
bun run build:pdf

# PowerPoint のみ
bun run build:pptx
```

または Claude Code で：

```
> PDF に出力して
```

### 出力形式と画像の扱い

| 形式 | 画像の扱い |
|------|-----------|
| HTML | 外部参照（`dist/images/` へコピーが必要） |
| PDF | 内部埋め込み（コピー不要） |
| PPTX | 内部埋め込み（コピー不要） |

`bun run build:html` は自動的に `slides/images/` を `dist/images/` にコピーします。

## Claude Code との連携

このプロジェクトには Claude Code 用の **Skill**（知識ベース）と **Subagents**（タスク実行エージェント）が含まれています。

### Subagents（タスク自動実行）

自然言語で依頼するだけで、適切なエージェントが自動的に起動します：

| エージェント | 起動例 | 機能 |
|-------------|--------|------|
| **slide-creator** | 「新しいスライドを作成して」 | テンプレート生成、ファイル作成 |
| **slide-reviewer** | 「スライドをレビューして」 | 品質チェック、Playwright による視覚検証 |
| **slide-builder** | 「PDF に出力して」 | HTML/PDF/PPTX へのビルド |

```
# 使用例
新しいスライドを作成してください
このスライドの品質をチェックして
PDF に出力して
```

### Skill（プロジェクト固有ルール）

`creating-marp-slides` スキル（`.claude/skills/marp/`）には以下の情報が含まれています：

- 画像配置ルール（`slides/images/`）
- 開発コマンド（`bun run preview` / `bun run build`）
- 設定ファイル（`.marprc.yml`）
- トラブルシューティング（references/troubleshooting.md）
- コンテンツ最適化（references/content-optimization.md）

### Skill と Subagents の役割分担

```
Skill (creating-marp-slides)  → プロジェクト固有ルール
  ├─ 画像配置・ファイル構成
  ├─ 開発コマンド・設定
  └─ references/（トラブルシューティング、最適化）

Subagents                     → アクション実行
  ├─ slide-creator            → 新規作成
  ├─ slide-reviewer           → 品質チェック（視覚検証含む）
  └─ slide-builder            → ビルド出力
```

## よく使うコマンド

```bash
# プレビューサーバー起動
bun run preview

# すべての形式でビルド
bun run build

# HTML のみ
bun run build:html

# PDF のみ
bun run build:pdf

# PowerPoint のみ
bun run build:pptx

# リントチェック（Markdown + JavaScript）
bun run lint

# JavaScript のみリント
bun run lint:js

# bunx で即座に実行（インストール不要）
bunx @marp-team/marp-cli -s slides/
```

## ベストプラクティス

### コンテンツの最適化

スライドの内容が画面に収まらない（見切れる）ことを防ぐために：

1. **1スライド1アイデア**: 情報を詰め込みすぎない
2. **コードブロックは簡潔に**: 長いコード例は分割または簡略化
3. **数式はインライン優先**: ブロック数式 (`$$...$$`) は縦スペースを大きく取るため控えめに
4. **コンテンツを分割**: 長い内容は複数スライドに分ける
5. **プレビューで確認**: 必ずプレビューサーバーやスクリーンショットで各スライドを検証

詳細は `.claude/skills/marp/references/content-optimization.md` を参照してください。

## テーマ

### 組み込みテーマ

Marp には3つの組み込みテーマがあります：

- **default**: シンプルで汎用的、ビジネス向け
- **gaia**: モダンで洗練、カラフル
- **uncover**: ミニマル、テキスト中心

### カスタムテーマ

`themes/` ディレクトリにCSSファイルを配置してカスタムテーマを作成できます。

詳細は [公式ドキュメント](https://marpit.marp.app/theme-css) を参照してください。

## トラブルシューティング

### 画像が表示されない

**CLI プレビューで表示されない場合**:
- 画像を `slides/images/` に配置しているか確認
- プレビューサーバーがプロジェクトルートから起動されているか確認
- 相対パス（`./images/filename.png`）で参照しているか確認
- 参考: [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163)

**VS Code プレビューで表示されない場合**:
- 絶対パス（`/assets/images/...`）ではなく相対パスを使用

**一般的な対処法**:
- `.marprc.yml` で `allowLocalFiles: true` を設定
- `--allow-local-files` フラグを使用

### PDF出力がうまくいかない

- Chromium/Chrome がインストールされているか確認
- `--allow-local-files` フラグを使用

### テーマが適用されない

- `theme` ディレクティブのスペルを確認
- カスタムテーマファイルのパスを確認

## 参考リンク

- [GitHub Pages (デモサイト)](https://toku345.github.io/marp-slides/)
- [Marp 公式サイト](https://marp.app/)
- [Marp GitHub](https://github.com/marp-team/marp)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- [Marpit Markdown](https://marpit.marp.app/markdown)

## ライセンス

このプロジェクトは自由に使用できます。Marp 自体は MIT ライセンスです。
