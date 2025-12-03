# Marp スライド作成スキル

このスキルは、Marp (Markdown Presentation Ecosystem) を使用したプレゼンテーションスライドの作成、編集、出力の全工程をサポートします。

## Marp とは

Marp は、マークダウン形式でプレゼンテーションスライドを作成できるオープンソースのツールセットです。

### 主要コンポーネント

- **Marp Core**: マークダウンをスライドHTMLに変換するレンダリングエンジン
- **Marp CLI**: コマンドラインからスライドをビルド・エクスポートするツール
- **Marp for VS Code**: VS Code でライブプレビューしながら編集できる拡張機能

## セットアップ

### プロジェクトのセットアップ

```bash
# 依存関係をインストール
bun install

# スクリプトの実行
bun run preview   # プレビューサーバー起動
bun run build     # スライドをビルド
```

### VS Code 拡張機能

VS Code で「Marp for VS Code」拡張機能をインストールすると、リアルタイムプレビューが可能になります。

## 基本的なマークダウン記法

### スライドの作成

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
- 箇条書き3

---

## コードの例

\`\`\`javascript
function hello() {
  console.log("Hello, Marp!");
}
\`\`\`
```

### 重要なポイント

- **スライド区切り**: `---` で新しいスライドを開始
- **Front Matter**: 先頭の `---` で囲まれた部分でグローバル設定
- **ディレクティブ**: `<!-- -->` コメント内で個別スライドの設定

## Front Matter 設定

```yaml
---
marp: true                    # Marp を有効化（必須）
theme: default                # テーマ選択
paginate: true                # ページ番号を表示
backgroundColor: #fff         # 背景色
backgroundImage: url('...')   # 背景画像
size: 16:9                    # スライドサイズ（16:9 または 4:3）
header: 'ヘッダーテキスト'    # 全スライドのヘッダー
footer: 'フッターテキスト'    # 全スライドのフッター
---
```

## ディレクティブ

特定のスライドのみに設定を適用する場合：

```markdown
<!-- _class: lead -->
<!-- _backgroundColor: #123 -->
<!-- _color: #fff -->

# このスライドだけ特別なスタイル
```

- `_` プレフィックス: 現在のスライドのみに適用
- プレフィックスなし: 以降のすべてのスライドに適用

### よく使うディレクティブ

- `<!-- class: ... -->`: CSSクラスを適用
- `<!-- backgroundColor: ... -->`: 背景色を変更
- `<!-- color: ... -->`: 文字色を変更
- `<!-- paginate: true/false -->`: ページ番号の表示/非表示
- `<!-- header: "..." -->`: ヘッダーテキスト
- `<!-- footer: "..." -->`: フッターテキスト

## 組み込みテーマ

Marp には3つの組み込みテーマがあります：

### 1. default

- シンプルで汎用的なテーマ
- ビジネス向けプレゼンテーションに最適

### 2. gaia

- モダンで洗練されたデザイン
- カラフルで視覚的に魅力的

### 3. uncover

- ミニマルで集中力を高めるデザイン
- テキスト中心のプレゼンテーションに最適

テーマの指定:

```yaml
---
marp: true
theme: gaia
---
```

## レイアウトクラス

### lead クラス

スライドの中央にコンテンツを配置（タイトルスライド向け）

```markdown
<!-- _class: lead -->

# 中央揃えのタイトル
```

### invert クラス

背景と文字色を反転

```markdown
<!-- _class: invert -->

# 暗い背景に明るい文字
```

## 画像の配置

### 通常の画像

```markdown
![](image.png)
```

### サイズ指定

```markdown
![width:600px](image.png)
![height:400px](image.png)
![w:600 h:400](image.png)
```

### 背景画像

```markdown
![bg](background.jpg)
![bg right](image.jpg)          # 右半分に配置
![bg left:40%](image.jpg)       # 左40%に配置
![bg fit](image.jpg)            # フィット
![bg contain](image.jpg)        # 含める
![bg cover](image.jpg)          # カバー
```

### 複数の背景画像

```markdown
![bg](image1.jpg)
![bg](image2.jpg)
![bg](image3.jpg)
```

## マルチカラム

画像の背景配置を使用して2カラムレイアウトを作成：

```markdown
![bg right:40%](image.jpg)

# 左側のコンテンツ

- テキストは左60%
- 画像は右40%に表示
```

## 数式（KaTeX）

Marpは数式もサポート：

```markdown
インライン数式: $E = mc^2$

ブロック数式:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## Marp CLI の使い方

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

スライドを画像として出力（サムネイル生成やプレビュー用途に便利）：

```bash
marp slide.md --image png          # PNG形式
marp slide.md --image jpeg         # JPEG形式
marp slide.md -o slide.png         # ファイル名で形式を指定
```

複数スライドがある場合、最初のスライドのみが出力されます。

### 出力形式と画像の扱い

| 形式 | 画像の扱い |
|------|-----------|
| HTML | 外部参照（別途画像ファイルが必要） |
| PDF | 内部埋め込み |
| PPTX | 内部埋め込み |

HTMLビルド時は、参照している画像を出力先にコピーする必要があります。

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

## 設定ファイル

プロジェクトルートに `.marprc.yml` または `marp.config.js` を配置：

### .marprc.yml の例

```yaml
allowLocalFiles: true
html: true
inputDir: ./slides
output: ./dist
pdf: true
theme: custom-theme.css
themeSet: ./themes
```

### marp.config.js の例

```javascript
module.exports = {
  allowLocalFiles: true,
  html: true,
  inputDir: './slides',
  output: './dist',
  themeSet: './themes'
}
```

## カスタムテーマの作成

カスタムCSSテーマを作成できます：

```css
/* @theme custom */

@import 'default';

section {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
}

h2 {
  color: #34495e;
}
```

テーマの使用:

```yaml
---
marp: true
theme: custom
---
```

## プロジェクト推奨構造

```
project/
├── .marprc.yml          # Marp設定ファイル
├── slides/              # スライドファイル
│   ├── presentation1.md
│   ├── presentation2.md
│   └── images/          # スライド用画像（重要！）
│       └── diagram.png
├── themes/              # カスタムテーマ
│   └── custom.css
├── assets/              # その他のリソース
└── dist/                # 出力先ディレクトリ
```

### 画像配置のベストプラクティス

**スライドで使用する画像は `slides/images/` に配置することを強く推奨します。**

この配置により：
- CLI プレビュー (`marp -s .`) で正しく表示される
- VS Code Marp 拡張機能のプレビューでも正しく表示される
- 相対パス `./images/filename.png` で参照可能

```markdown
<!-- スライド内での画像参照 -->
![](./images/diagram.png)
![bg right:40%](./images/photo.jpg)
```

**注意**: `assets/images/` など他の場所に配置すると、CLI サーバーモードで画像が表示されない問題が発生します。
詳細は [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163) を参照。

## ベストプラクティス

1. **スライドは簡潔に**: 1スライドに1つのメインアイデア
2. **画像を活用**: `![bg]` で視覚的な魅力を向上
3. **一貫性を保つ**: テーマとレイアウトを統一
4. **ページ番号**: `paginate: true` で進行状況を表示
5. **プレビュー確認**: VS Code拡張機能でリアルタイム確認
6. **バージョン管理**: マークダウンファイルはGitで管理しやすい

## コンテンツ最適化とレイアウト

### コンテンツオーバーフローの回避

スライドの内容が画面に収まらない場合の対処法：

#### 1. コードブロックの簡潔化

長いコードブロックはスライドの下部が見切れる原因になります：

```markdown
<!-- 悪い例: 長すぎるコード -->
```bash
echo "---
marp: true
theme: default
paginate: true
---

# タイトル

コンテンツ
" > slide.md
```

<!-- 良い例: シンプルに -->
```bash
# slide.md を作成
marp slide.md
```
```

#### 2. コンテンツの分割

1つのスライドに詰め込みすぎない：

```markdown
<!-- 悪い例: 情報過多 -->
---

## インストール方法

bun、npm、Homebrew、Scoop、Docker...
（すべての方法を1スライドに）

<!-- 良い例: 複数スライドに分割 -->
---

## インストール方法（基本）

bun add -g @marp-team/marp-cli

---

## インストール方法（その他）

Homebrew、Scoop、Docker...
```

#### 3. 数式の配置

ブロック数式は縦スペースを大きく取るため注意：

```markdown
<!-- ブロック数式は控えめに -->
インライン数式を優先: $E = mc^2$

<!-- 複数の数式は別スライドに -->
```

#### 4. テーマ別の挙動差異

一部のディレクティブはテーマによって異なる表示になる場合があります：

- `invert` クラスは `default` テーマでは正しく動作するが、`gaia` テーマでは期待通りに表示されない場合がある
- 新しいレイアウトを試す際は、必ずプレビューで確認

#### 5. レンダリング確認

コンテンツの見切れを防ぐため：

```bash
# プレビューサーバーで確認
marp -s slides/

# スクリーンショットで各スライドを検証
# （Playwright MCP などのツールを活用）
```

### bunx での即時利用

グローバルインストール不要で即座に試せます：

```bash
# インストールせずに実行（package.json のバージョンを使用）
bunx @marp-team/marp-cli slide.md

# プレビューサーバーも可能
bunx @marp-team/marp-cli -s slides/
```

**注意**: `-s` (サーバーモード) はディレクトリを指定する必要があります。単一ファイルは指定できません。

## よくあるテクニック

### スライドを隠す

```markdown
<!-- _class: lead -->

# 非表示スライド

---

<!-- _class: skip -->
このスライドは印刷時にスキップ
```

### スピーカーノート

```markdown
---

# スライドタイトル

<!--
これはスピーカーノートです。
スライドには表示されません。
-->
```

### HTMLの埋め込み

```yaml
---
marp: true
html: true
---
```

設定後、HTMLタグを直接使用可能：

```html
<div style="display: grid; grid-template-columns: 1fr 1fr;">
  <div>左カラム</div>
  <div>右カラム</div>
</div>
```

## トラブルシューティング

### 画像が表示されない

#### CLI プレビューで表示されない場合

Marp CLI のサーバーモード (`marp -s`) は、サーバールートディレクトリとそのサブディレクトリ内のファイルのみを配信します。

**解決策**:
1. 画像を `slides/images/` に配置
2. サーバーをプロジェクトルートから起動: `marp -s . --allow-local-files`
3. 相対パスで参照: `./images/filename.png`

参考: [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163)

#### VS Code プレビューで表示されない場合

- 絶対パス（`/assets/images/...`）は VS Code では動作しません
- 相対パス（`./images/...`）を使用してください

#### 一般的な対処法

- `.marprc.yml` で `allowLocalFiles: true` を設定
- `--allow-local-files` フラグを使用

### テーマが適用されない

- `theme` ディレクティブのスペルを確認
- カスタムテーマファイルのパスを確認
- `@theme` コメントがCSS内にあるか確認

### PDF出力がうまくいかない

- Chromium/Chromeがインストールされているか確認
- `--allow-local-files` フラグを使用

## 参考リンク

- 公式サイト: <https://marp.app/>
- GitHub: <https://github.com/marp-team/marp>
- Marp CLI: <https://github.com/marp-team/marp-cli>
- VS Code拡張: <https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode>
- Marp Core: <https://github.com/marp-team/marp-core>

## 典型的なワークフロー

1. プロジェクトのセットアップ（`bun install`）
2. マークダウンファイルを作成（例: `slides/presentation.md`）
3. 画像は `slides/images/` に配置し、`./images/filename.png` で参照
4. プレビューサーバーで確認しながら編集
   - `bun run preview` → `http://localhost:8080/slides/presentation.md`
5. 必要に応じてカスタムテーマを作成
6. 最終版をHTML/PDF/PPTXにエクスポート（`bun run build`）
