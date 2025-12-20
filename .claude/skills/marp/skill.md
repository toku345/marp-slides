---
name: marp
description: Marp (Markdown Presentation Ecosystem) を使用したスライド作成の完全ガイド。新しいスライドの作成、既存スライドの編集、ビルド、プレビュー時に使用。
---

# Marp スライド作成スキル

このスキルは、Marp (Markdown Presentation Ecosystem) を使用したプレゼンテーションスライドの作成、編集、出力の全工程をサポートします。

## 使用タイミング

- 新しいMarpスライドを作成するとき
- 既存のスライドを編集・改善するとき
- スライドをビルド・プレビューするとき
- 画像やテーマの配置で問題が発生したとき

## クイックスタート

```bash
bun install           # 依存関係をインストール
bun run preview       # プレビューサーバー起動 → http://localhost:8080/slides/xxx.md
bun run build         # スライドをビルド（dist/へ出力）
```

## プロジェクト構造

```
marp-slides/
├── slides/              # スライドファイル
│   ├── presentation.md
│   └── images/          # 画像ファイル（重要！この場所に配置）
├── themes/              # カスタムテーマ
├── dist/                # 出力先
└── .marprc.yml          # Marp設定
```

## 最小限のスライド

```markdown
---
marp: true
theme: default
paginate: true
---

# タイトル

サブタイトル

---

## スライド2

- ポイント1
- ポイント2
```

## 詳細リファレンス

タスクに応じて、以下のファイルを読み込んでください:

| ファイル | 内容 | 読み込むタイミング |
|---------|------|-----------------|
| `syntax.md` | マークダウン構文、ディレクティブ、Front Matter | スライドの書き方を確認するとき |
| `themes.md` | 組み込みテーマ、レイアウトクラス | テーマやレイアウトを選択・設定するとき |
| `images.md` | 画像の配置と参照方法 | 画像を追加するとき、画像が表示されないとき |
| `cli.md` | CLIコマンド、ビルド、プレビュー | ビルドやプレビューを実行するとき |
| `config.md` | 設定ファイル（.marprc.yml等） | 設定をカスタマイズするとき |
| `custom-themes.md` | カスタムテーマの作成 | 独自テーマを作成するとき |
| `optimization.md` | コンテンツ最適化、オーバーフロー回避 | スライドが見切れるとき、レイアウト調整 |
| `troubleshooting.md` | 問題解決ガイド | エラーや表示問題が発生したとき |

## 重要な注意点

### 画像の配置

**画像は必ず `slides/images/` に配置してください。**

```markdown
![](./images/diagram.png)
![bg right:40%](./images/photo.jpg)
```

他の場所に配置すると、CLIプレビューで表示されない問題が発生します。

### スライドの分割

1スライドに詰め込みすぎないでください。コンテンツが見切れる原因になります。

## 参考リンク

- 公式サイト: <https://marp.app/>
- GitHub: <https://github.com/marp-team/marp>
- Marp CLI: <https://github.com/marp-team/marp-cli>
- VS Code拡張: <https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode>
