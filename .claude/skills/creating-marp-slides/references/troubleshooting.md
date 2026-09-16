# トラブルシューティング

エラーログと実際の参照先を確認し、原因を切り分ける。

## 画像が表示されない

- 元の画像が `slides/images/` にあり、Markdown が `./images/...` を参照しているか確認する。大文字・小文字も一致させる。
- プレビューはルートで `bun run preview` を起動する。この設定はリポジトリルートを配信する。
- HTML 出力では `dist/images/` に画像が必要。`bun run build:html` はコピーも行うが、個別変換では `bun run copy:images` が必要。
- PDF/PPTX 変換時はローカル画像へのアクセス許可を確認する。既存の scripts と `.marprc.yml` は設定済みなので、フラグの追加だけで解決すると判断しない。
- VS Code と CLI の両方で使う画像は、環境依存の絶対パスを避ける。

## テーマが適用されない

Front Matter の `theme` と、カスタム CSS の `/* @theme theme-name */` を照合する。
`.marprc.yml` の `themeSet` と実ファイルの場所も確認する。
`invert` は `default` / `gaia` / `uncover` で利用可能。期待と違う場合はスライドごとの
`class` 指定と追加 CSS を調べる。

## PDF/PPTX/画像の変換が失敗する

- ログからブラウザ未検出、起動失敗、画像読み込み失敗などを区別する。
- 使用中の Marp CLI が対応するブラウザを確認する。自動検出されない場合は `--browser-path /path/to/browser` で実行ファイルを指定する。
- Playwright 用ブラウザのインストールだけで Marp が検出できるとは限らない。利用する実行ファイルの場所を確認する。
- 日本語の文字化けや欠けはフォントも確認する。CI では `fonts-noto-cjk` を導入している。

ブラウザ設定の詳細は [Marp CLI の Browser options](https://github.com/marp-team/marp-cli#browser-options) を参照する。
