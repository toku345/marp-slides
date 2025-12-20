# Marp CLI ガイド

## 基本コマンド

### HTML出力

```bash
marp slide.md
marp slide.md -o output.html
```

### PDF出力

```bash
marp slide.md --pdf
marp slide.md -o output.pdf
```

### PowerPoint出力

```bash
marp slide.md --pptx
marp slide.md -o output.pptx
```

### 画像出力

スライドを画像として出力（サムネイル生成やプレビュー用途に便利）:

```bash
marp slide.md --image png          # PNG形式
marp slide.md --image jpeg         # JPEG形式
marp slide.md -o slide.png         # ファイル名で形式を指定
```

複数スライドがある場合、最初のスライドのみが出力されます。

## 出力形式と画像の扱い

| 形式 | 画像の扱い |
|------|-----------|
| HTML | 外部参照（別途画像ファイルが必要） |
| PDF | 内部埋め込み |
| PPTX | 内部埋め込み |

HTMLビルド時は、参照している画像を出力先にコピーする必要があります。

## 開発モード

### ウォッチモード

```bash
marp -w slide.md
```

### プレビューサーバー

```bash
# プロジェクトルートから起動（推奨）
marp -s . --allow-local-files

# アクセス URL 例
# http://localhost:8080/slides/presentation.md
```

**重要**: サーバーはルートディレクトリとそのサブディレクトリのファイルのみを配信します。
画像を正しく表示するには、プロジェクトルートから起動してください。

## bunx での即時利用

グローバルインストール不要で即座に試せます:

```bash
# インストールせずに実行（package.json のバージョンを使用）
bunx @marp-team/marp-cli slide.md

# プレビューサーバーも可能
bunx @marp-team/marp-cli -s slides/
```

**注意**: `-s` (サーバーモード) はディレクトリを指定する必要があります。単一ファイルは指定できません。

## このプロジェクトのコマンド

```bash
bun run preview   # プレビューサーバー起動
bun run build     # スライドをビルド
```
