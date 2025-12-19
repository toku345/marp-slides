---
name: marp-slides
description: Marp (Markdown Presentation Ecosystem) を使用したスライド作成をサポートする。スライドの新規作成、構文の確認、テーマ設定、CLI操作、トラブルシューティングが必要な場合に使用する。
---

# Marp スライド作成スキル

Marp (Markdown Presentation Ecosystem) を使用したプレゼンテーションスライドの作成、編集、出力をサポートします。

## Marp とは

マークダウン形式でプレゼンテーションスライドを作成できるオープンソースのツールセット。

- **Marp Core**: マークダウンをスライドHTMLに変換
- **Marp CLI**: コマンドラインからビルド・エクスポート
- **Marp for VS Code**: ライブプレビュー編集

## クイックスタート

```bash
# 依存関係をインストール
bun install

# プレビューサーバー起動
bun run preview

# スライドをビルド
bun run build
```

## 基本的なスライド構造

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
```

### 重要なポイント

- **スライド区切り**: `---` で新しいスライドを開始
- **Front Matter**: 先頭の `---` で囲まれた部分でグローバル設定
- **ディレクティブ**: `<!-- -->` コメント内で個別スライドの設定

## プロジェクト構造

```
project/
├── slides/              # スライドファイル
│   ├── presentation.md
│   └── images/          # 画像（重要！）
├── themes/              # カスタムテーマ
└── dist/                # 出力先
```

**画像は `slides/images/` に配置** → `./images/filename.png` で参照可能

## 典型的なワークフロー

1. スライドを作成: `slides/presentation.md`
2. 画像は `slides/images/` に配置
3. プレビュー: `bun run preview` → `http://localhost:8080/slides/presentation.md`
4. 出力: `bun run build`

## 詳細リファレンス

以下のファイルで詳細な情報を提供:

- `reference/syntax.md` - マークダウン構文、ディレクティブ、Front Matter
- `reference/themes.md` - テーマ、レイアウトクラス、カスタムテーマ
- `reference/cli.md` - CLI コマンド、出力形式、設定ファイル
- `reference/troubleshooting.md` - 画像表示問題、トラブルシューティング
- `reference/best-practices.md` - コンテンツ最適化、オーバーフロー回避

## 公式リソース

- 公式サイト: https://marp.app/
- GitHub: https://github.com/marp-team/marp
- Marp CLI: https://github.com/marp-team/marp-cli
