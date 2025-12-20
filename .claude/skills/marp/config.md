# Marp 設定ファイル

プロジェクトルートに `.marprc.yml` または `marp.config.js` を配置できます。

## .marprc.yml の例

```yaml
allowLocalFiles: true
html: true
inputDir: ./slides
output: ./dist
pdf: true
theme: custom-theme.css
themeSet: ./themes
```

## marp.config.js の例

```javascript
module.exports = {
  allowLocalFiles: true,
  html: true,
  inputDir: './slides',
  output: './dist',
  themeSet: './themes'
}
```

## 主要な設定オプション

| オプション | 説明 |
|-----------|------|
| `allowLocalFiles` | ローカルファイルへのアクセスを許可 |
| `html` | HTMLタグの埋め込みを許可 |
| `inputDir` | スライドファイルのディレクトリ |
| `output` | 出力先ディレクトリ |
| `pdf` | PDF出力を有効化 |
| `themeSet` | カスタムテーマのディレクトリ |
