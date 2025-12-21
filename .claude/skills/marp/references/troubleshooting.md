# トラブルシューティング

## 画像が表示されない

### CLI プレビューで表示されない

**原因**: Marp CLI サーバーモードはルート以下のファイルのみ配信。

**解決策**:
1. 画像を `slides/images/` に移動
2. 相対パス `./images/filename.png` で参照
3. `bun run preview` をプロジェクトルートから実行

### VS Code プレビューで表示されない

**原因**: 絶対パス（`/assets/images/...`）は VS Code で解決されない。

**解決策**: 相対パス（`./images/...`）を使用。

### PDF/HTML 出力で表示されない

**原因**: `--allow-local-files` フラグが必要。

**解決策**: `bun run build` を使用（設定済み）。

## テーマが適用されない

1. Front Matter の `theme:` スペルを確認
2. カスタムテーマ: CSS 内に `/* @theme theme-name */` があるか確認
3. `.marprc.yml` の `themeSet` パスを確認

## PDF 出力が失敗する

**原因**: Chromium が必要。

**解決策**: Playwright の Chromium または `brew install --cask chromium` でインストール。
