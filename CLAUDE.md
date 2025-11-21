# Marp スライドプロジェクト

このプロジェクトは Marp (Markdown Presentation Ecosystem) を使用して、マークダウンベースのプレゼンテーションスライドを作成・管理するためのものです。

## プロジェクト構成

```
marp-the-slide/
├── .claude/
│   └── skills/
│       └── marp/         # Marpスキル（構文、CLI、カスタマイズ等）
├── slides/               # スライドファイル
├── themes/               # カスタムテーマ（任意）
├── assets/               # 画像などのリソース
└── dist/                 # 出力先（HTML/PDF/PPTX）
```

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
3. プレビュー: `bun run preview`
4. 出力: `bun run build`

詳細な使い方は `marp` スキルを参照してください。
