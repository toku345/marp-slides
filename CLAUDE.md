# Marp スライドプロジェクト

このプロジェクトは Marp (Markdown Presentation Ecosystem) を使用して、マークダウンベースのプレゼンテーションスライドを作成・管理するためのものです。

## プロジェクト構成

```
marp-slides/
├── .claude/
│   └── skills/
│       └── marp/         # Marpスキル（構文、CLI、カスタマイズ等）
├── slides/               # スライドファイル
│   └── images/           # スライド用画像（CLI・VS Code両対応）
├── themes/               # カスタムテーマ（任意）
├── assets/               # その他のリソース
└── dist/                 # 出力先（HTML/PDF/PPTX）
```

### 画像配置の重要な注意点

スライドで使用する画像は **`slides/images/`** に配置してください。

- `./images/filename.png` のような相対パスで参照可能
- CLI プレビュー (`bun run preview`) と VS Code プレビューの両方で動作
- 詳細は [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163) を参照

## スキル

- **marp**: Marpスライド作成の完全ガイド
  - セットアップとインストール
  - マークダウン構文とディレクティブ
  - テーマとレイアウト
  - 開発サーバーとプレビュー
  - HTML/PDF/PPTX出力
  - カスタムテーマ作成
  - コンテンツ最適化とレイアウト調整
  - トラブルシューティング

## 学習リソース

- **slides/marp-tutorial.md**: Marp初心者向けの包括的なチュートリアルスライド（26ページ）
  - インストール方法から出力まで完全カバー
  - 実践的なワークフローとベストプラクティス
  - コンテンツオーバーフローを避ける実例

## クイックスタート

1. 依存関係をインストール: `bun install`
2. スライドを作成: `slides/presentation.md`
3. 画像は `slides/images/` に配置
4. プレビュー: `bun run preview` → `http://localhost:8080/slides/presentation.md`
5. 出力: `bun run build`

詳細な使い方は `marp` スキルを参照してください。
