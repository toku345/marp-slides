# Marp スライドプロジェクト

このプロジェクトは [Marp (Markdown Presentation Ecosystem)](https://marp.app/) を使用して、マークダウンベースのプレゼンテーションスライドを作成・管理するためのものです。

## 特徴

- **マークダウンでスライド作成**: テキストエディタで簡単にプレゼンテーション作成
- **バージョン管理対応**: マークダウンファイルなのでGitで管理しやすい
- **複数形式に出力**: HTML、PDF、PowerPointに対応
- **カスタマイズ可能**: CSSでテーマを自由にカスタマイズ
- **リアルタイムプレビュー**: VS Code拡張やプレビューサーバーで即座に確認

## プロジェクト構成

```
marp-the-slide/
├── .claude/
│   └── skills/
│       └── marp/         # Claude Code用Marpスキル
├── slides/               # スライドファイル（.md）
├── themes/               # カスタムテーマ（.css）
├── assets/               # 画像などのリソース
│   └── images/
└── dist/                 # 出力先（HTML/PDF/PPTX）
```

## セットアップ

### 前提条件

- Node.js (npm または Yarn)

### Marp CLI のインストール

```bash
# npm を使用
npm install -g @marp-team/marp-cli

# または Yarn を使用
yarn global add @marp-team/marp-cli
```

### VS Code 拡張機能（推奨）

VS Code で「Marp for VS Code」拡張機能をインストールすると、リアルタイムプレビューが可能になります。

[Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

## 基本的な使い方

### 1. スライドを作成

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

### 2. プレビューで確認

プレビューサーバーを起動して、ブラウザで確認しながら編集：

```bash
marp -s slides/presentation.md
```

または VS Code の Marp 拡張機能でリアルタイムプレビュー。

### 3. エクスポート

完成したスライドを各種形式でエクスポート：

```bash
# HTML出力
marp slides/presentation.md -o dist/presentation.html

# PDF出力
marp slides/presentation.md -o dist/presentation.pdf

# PowerPoint出力
marp slides/presentation.md -o dist/presentation.pptx
```

## Claude Code でのスキル活用

このプロジェクトには Claude Code 用の `marp` スキルが含まれています。

### スキルの使い方

Claude Code でスライド作成を依頼する際、以下のように指示してください：

```
marp スキルを使って、新しいスライドを作成してください
```

### スキルに含まれる内容

`marp` スキル（`.claude/skills/marp/skill.md`）には以下の情報が含まれています：

- セットアップとインストール方法
- マークダウン構文とディレクティブ
- 組み込みテーマ（default/gaia/uncover）
- レイアウトクラス（lead/invert）
- 画像の配置と背景画像
- 数式（KaTeX）のサポート
- Marp CLI の使い方
- カスタムテーマの作成方法
- トラブルシューティング

Claude Code が `marp` スキルを自動的に読み込み、詳細なガイドを参照しながら作業を支援します。

## よく使うコマンド

```bash
# プレビューサーバー起動
marp -s slides/

# ファイル監視モード（変更を自動検出）
marp -w slides/presentation.md

# カレントディレクトリの全.mdファイルをHTML出力
marp slides/*.md -o dist/

# PDFで出力（ローカルファイル許可）
marp slides/presentation.md --pdf --allow-local-files -o dist/presentation.pdf
```

## テーマ

### 組み込みテーマ

Marp には3つの組み込みテーマがあります：

- **default**: シンプルで汎用的、ビジネス向け
- **gaia**: モダンで洗練、カラフル
- **uncover**: ミニマル、テキスト中心

### カスタムテーマ

`themes/` ディレクトリにCSSファイルを配置してカスタムテーマを作成できます。

詳細は Claude Code の `marp` スキルまたは [公式ドキュメント](https://marpit.marp.app/theme-css) を参照してください。

## トラブルシューティング

### 画像が表示されない

- 相対パスを確認
- `.marprc.yml` で `allowLocalFiles: true` を設定

### PDF出力がうまくいかない

- Chromium/Chrome がインストールされているか確認
- `--allow-local-files` フラグを使用

### テーマが適用されない

- `theme` ディレクティブのスペルを確認
- カスタムテーマファイルのパスを確認

## 参考リンク

- [Marp 公式サイト](https://marp.app/)
- [Marp GitHub](https://github.com/marp-team/marp)
- [Marp CLI](https://github.com/marp-team/marp-cli)
- [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- [Marpit Markdown](https://marpit.marp.app/markdown)

## ライセンス

このプロジェクトは自由に使用できます。Marp 自体は MIT ライセンスです。
