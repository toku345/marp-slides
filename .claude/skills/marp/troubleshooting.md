# Marp トラブルシューティング

## 画像が表示されない

### CLI プレビューで表示されない場合

Marp CLI のサーバーモード (`marp -s`) は、サーバールートディレクトリとそのサブディレクトリ内のファイルのみを配信します。

**解決策**:
1. 画像を `slides/images/` に配置
2. サーバーをプロジェクトルートから起動: `marp -s . --allow-local-files`
3. 相対パスで参照: `./images/filename.png`

参考: [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163)

### VS Code プレビューで表示されない場合

- 絶対パス（`/assets/images/...`）は VS Code では動作しません
- 相対パス（`./images/...`）を使用してください

### 一般的な対処法

- `.marprc.yml` で `allowLocalFiles: true` を設定
- `--allow-local-files` フラグを使用

## テーマが適用されない

- `theme` ディレクティブのスペルを確認
- カスタムテーマファイルのパスを確認
- `@theme` コメントがCSS内にあるか確認

## PDF出力がうまくいかない

- Chromium/Chromeがインストールされているか確認
- `--allow-local-files` フラグを使用

## コンテンツが見切れる

- スライドの内容を減らす
- 複数スライドに分割する
- フォントサイズを調整する（カスタムテーマで）
- 詳細は `optimization.md` を参照

## サーバーモードが起動しない

- ポート8080が使用中でないか確認
- ディレクトリパスが正しいか確認
- `-s` オプションにはディレクトリを指定（ファイルは不可）
