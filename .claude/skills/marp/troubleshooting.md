# トラブルシューティング

## 画像が表示されない

### CLIプレビューの場合
1. 画像を `slides/images/` に配置
2. 相対パスで参照: `./images/filename.png`
3. プロジェクトルートから起動: `bun run preview`

参考: [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163)

### VS Codeプレビューの場合
- 絶対パス（`/assets/images/...`）は動作しない
- 相対パス（`./images/...`）を使用

## PDF出力が失敗する

- Chromium/Chromeがインストールされているか確認
- `--allow-local-files` フラグを使用

## サーバーモードが起動しない

- ポート8080が使用中でないか確認
- `-s` オプションにはディレクトリを指定（ファイルは不可）
