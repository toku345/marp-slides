---
marp: true
theme: gaia
paginate: true
backgroundColor: #fff
---

<!-- _class: lead -->
# marpの使い方

未経験者のための最初のスライド作成ガイド

---

## Marpとは

**Marp** (Markdown Presentation Ecosystem)

- マークダウン形式でプレゼンテーションスライドを作成
- PowerPointのような複雑なツールは不要
- シンプルなマークダウンでプロフェッショナルなスライド
- バージョン管理（Git）が容易

---

## Marpで実現できること

### ビジネスプレゼンテーション

- シンプルで洗練されたスライド
- 会議・提案資料・レポート

### 技術発表

- コードハイライト対応
- 数式表示（KaTeX）
- ライブデモ・チュートリアル

### 教育コンテンツ

- このスライド自体がMarpで作成されています！

---

## 主要コンポーネント

- **Marp Core**: マークダウンをスライドHTMLに変換するエンジン
- **Marp CLI**: コマンドラインからスライドをビルド・エクスポート
- **Marp for VS Code**: リアルタイムプレビュー機能を持つ拡張機能

---

## インストール方法

### 最も簡単な方法（インストール不要）

```bash
npx @marp-team/marp-cli@latest slide.md
```

### グローバルインストール（推奨）

```bash
npm install -g @marp-team/marp-cli
```

**必須要件**: Node.js v18以上

---

## その他のインストール方法

### Homebrew（macOS/Linux）

```bash
brew install marp-cli
```

### Scoop（Windows）

```bash
scoop install marp
```

### Docker

```bash
docker pull marpteam/marp-cli
```

---

## 最初のスライドを作成しよう

`slide.md` ファイルを作成：

```markdown
---
marp: true
---

# はじめてのMarp

あなたの名前

---

## 2枚目のスライド
```

---

## Front Matter（全体設定）

ファイル先頭の `---` で囲まれた部分で全体設定：

```yaml
---
marp: true                    # Marp有効化（必須）
theme: default                # テーマ選択
paginate: true                # ページ番号表示
size: 16:9                    # スライドサイズ
header: 'ヘッダー'             # 全体のヘッダー
footer: 'フッター'             # 全体のフッター
backgroundColor: #fff         # 背景色
---
```

---

## スライドの区切り

**3つのハイフン** で新しいスライドを開始：

```markdown
---
marp: true
---

# 1枚目のスライド

---

# 2枚目のスライド

---

# 3枚目のスライド
```

---

## ディレクティブ（個別スライド設定）

特定のスライドだけに設定を適用：

```markdown
<!-- _class: lead -->
<!-- _backgroundColor: #123 -->
<!-- _color: #fff -->

# このスライドだけ特別なスタイル
```

- `_` プレフィックス：**現在のスライドのみ**
- プレフィックスなし：**以降すべてのスライド**

---

## 組み込みテーマ（3種類）

### 1. default

シンプルで汎用的、ビジネス向け

### 2. gaia

モダンでカラフル、視覚的に魅力的（このスライドで使用中）

### 3. uncover

ミニマル、テキスト中心

---

## テーマの使い分け実例

```markdown
---
theme: default  # ビジネス・公式文書向け
---
```

```markdown
---
theme: gaia  # プレゼン・デモ向け
---
```

```markdown
---
theme: uncover  # ミニマル・詩的な表現向け
---
```

**Tip**: 同じコンテンツでもテーマを変えるだけで印象が大きく変わります

---

## レイアウトクラス

### lead クラス

中央揃え（タイトルスライド向け）

```markdown
<!-- _class: lead -->
# 中央揃えのタイトル
```

---

<!-- _class: lead -->

# これが lead クラスの実例

中央揃えで大きく表示されます

---

## レイアウトクラス

### invert クラス

背景と文字色を反転

```markdown
<!-- _class: invert -->
# 暗い背景に明るい文字
```

---

<!-- _class: invert -->

# これが invert クラスの実例

背景が暗く、文字が明るく表示されます

---

## クラスの組み合わせ

複数のクラスを同時に適用可能：

```markdown
<!-- _class: lead invert -->
# 中央揃え + 反転
```

**用途例**:

- セクション区切り
- 強調したいメッセージ
- 休憩スライド

---

## 画像の配置

### 通常の画像

```markdown
![](image.png)
![width:600px](image.png)
![height:400px](image.png)
![w:600 h:400](image.png)
```

### 背景画像

```markdown
![bg](background.jpg)
![bg right](image.jpg)          # 右半分に配置
![bg left:40%](image.jpg)       # 左40%に配置
![bg fit](image.jpg)            # フィット表示
```

---

## 画像配置の実践例

### 分割レイアウト（テキスト + 画像）

```markdown
![bg right:40%](diagram.png)

## 左側にテキスト

- ポイント1
- ポイント2
- ポイント3

右40%に画像が表示されます
```

**用途**: 製品紹介、図解説明、ビフォーアフター

---

## コードブロック

シンタックスハイライト対応：

```javascript
function hello(name) {
  console.log(`Hello, ${name}!`);
}

hello("Marp");
```

```python
def hello(name):
    print(f"Hello, {name}!")

hello("Marp")
```

---

## 便利な機能

### 自動サイズ調整

```markdown
<!-- fit -->
# 長いタイトルを自動で画面に合わせる
```

### 数式（KaTeX）

インライン数式: $E = mc^2$

---

## 高度なレイアウトテクニック

### 2カラムレイアウト

HTML要素を使って自由なレイアウトが可能：

```markdown
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div>

## 左カラム

- ポイント1
- ポイント2

</div>

<div>

## 右カラム

- ポイント3
- ポイント4

</div>

</div>
```

---

## 実践的なレイアウトパターン

### パターン1: ヘッダー付きスライド

```markdown
---
header: 'プロジェクト名 | 2024-11-21'
footer: 'Confidential'
---
```

### パターン2: セクション区切り

```markdown
<!-- _class: lead invert -->
# 第2章
新しいセクションの開始
```

---

## Marp CLIの基本コマンド

### プレビュー（推奨）

```bash
# プロジェクトルートからサーバー起動（画像表示に必要）
marp -s . --allow-local-files

# ブラウザで http://localhost:8080/slides/file.md にアクセス
```

### ウォッチモード

```bash
# ファイル変更を監視して自動更新
marp -w slide.md
```

---

## 出力形式

### HTML出力

```bash
marp slide.md -o output.html
```

### PDF出力

```bash
marp slide.md -o output.pdf
```

### PowerPoint出力

```bash
marp slide.md -o output.pptx
```

---

## プロジェクト推奨構造

```
project/
├── .marprc.yml          # Marp設定ファイル
├── slides/              # スライドファイル
│   ├── presentation1.md
│   ├── presentation2.md
│   └── images/          # スライド用画像（重要！）
├── themes/              # カスタムテーマ（任意）
│   └── custom.css
└── dist/                # 出力先
```

**Tip**: 画像は `slides/images/` に配置し `./images/file.png` で参照

---

## .marprc.yml 設定例

プロジェクトルートに配置：

```yaml
allowLocalFiles: true
html: true
inputDir: ./slides
output: ./dist
pdf: true
theme: ./themes/custom.css
themeSet: ./themes
```

これで、コマンド実行時の引数を省略できます

---

## トラブルシューティング

### 画像が表示されない

**CLI プレビューの場合**:

1. 画像を `slides/images/` に配置
2. 相対パス `./images/file.png` で参照
3. プロジェクトルートから `marp -s . --allow-local-files`

**VS Code プレビューの場合**:

- 絶対パス（`/images/...`）は使わない
- 相対パス（`./images/...`）を使用

### PDF出力が失敗する

```bash
marp --allow-local-files slide.md --pdf
```

---

## 初心者向けワークフロー

### 1. インストール
```bash
npm install -g @marp-team/marp-cli
```

### 2. ファイル作成
`slides/presentation.md` を作成

### 3. 編集しながらプレビュー
```bash
marp -s . --allow-local-files
```

---

## 初心者向けワークフロー

### 4. ブラウザで確認
`http://localhost:8080/slides/presentation.md` にアクセス

### 5. 最終出力
```bash
marp slides/presentation.md -o dist/presentation.pdf
```

---

## 最初の5分で試すこと

### 1. サンプルファイル作成

`slides/first.md` を作成してMarpの基本構文を試す

### 2. プレビュー

```bash
marp -s . --allow-local-files
# http://localhost:8080/slides/first.md にアクセス
```

### 3. PDF出力

```bash
marp slides/first.md -o first.pdf --allow-local-files
```

---

## ベストプラクティス

1. **1スライド1アイデア**: シンプルに保つ
2. **画像を活用**: `![bg]` で視覚的魅力向上
3. **一貫性**: テーマとレイアウトを統一
4. **ページ番号**: `paginate: true` で進行表示
5. **バージョン管理**: マークダウンはGit管理が容易
6. **プレビュー確認**: 編集中は常にプレビュー

---

## サンプルスライド集

### テンプレート1: ビジネスプレゼン

```markdown
---
marp: true
theme: default
paginate: true
header: '会社名 | プロジェクト名'
footer: '© 2024 Company Name'
---

<!-- _class: lead -->
# プロジェクト提案書

2024年度 新規事業計画

---

## 背景と課題

### 現状の課題
- 課題1
- 課題2
```

---

## サンプルスライド集

### テンプレート2: 技術発表

```markdown
---
marp: true
theme: gaia
paginate: true
---

<!-- _class: lead -->
# 技術解説
## WebアプリケーションとMarp

---

## コード例

```javascript
function createSlide() {
  return "Easy!";
}
```
```

---

## サンプルスライド集

### テンプレート3: 教育コンテンツ

```markdown
---
marp: true
theme: uncover
---

<!-- _class: lead -->
# レッスン1
基礎から学ぶ

---

## 学習目標

1. 概念を理解する
2. 実践で使えるようになる
3. 応用力を身につける
```

---

## 参考リンク

- 公式サイト: https://marp.app/
- GitHub: https://github.com/marp-team/marp
- Marp CLI: https://github.com/marp-team/marp-cli
- VS Code拡張: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
- Marpit（構文リファレンス）: https://marpit.marp.app/

---

<!-- _class: lead -->

![bg fit](./images/happy-sliding.png)

---

<!-- _class: lead -->

## さあ、始めましょう！

Marpで素晴らしいプレゼンテーションを作成してください

**Happy Sliding!**
