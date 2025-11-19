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

## レイアウトクラス

### lead クラス

中央揃え（タイトルスライド向け）

```markdown
<!-- _class: lead -->
# 中央揃えのタイトル
```

---

## レイアウトクラス

### invert クラス

背景と文字色を反転

```markdown
<!-- _class: invert -->
# 暗い背景に明るい文字
```

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

## Marp CLIの基本コマンド

### プレビュー（推奨）

```bash
# サーバーモードでライブプレビュー
marp -s slide.md

# ブラウザで http://localhost:8080 にアクセス
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
│   └── presentation2.md
├── themes/              # カスタムテーマ（任意）
│   └── custom.css
├── assets/              # 画像リソース
│   └── images/
└── dist/                # 出力先
    ├── presentation1.html
    └── presentation1.pdf
```

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

```bash
# CLIオプションで解決
marp --allow-local-files slide.md

# または .marprc.yml に追加
allowLocalFiles: true
```

### PDF出力が失敗する

```bash
# ブラウザを明示的に指定
marp --browser firefox slide.md --pdf
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
marp -s slides/presentation.md
```

---

## 初心者向けワークフロー

### 4. ブラウザで確認
`http://localhost:8080` にアクセス

### 5. 最終出力
```bash
marp slides/presentation.md -o dist/presentation.pdf
```

---

## 最初の5分で試すこと

### 1. サンプルファイル作成

`first.md` を作成してMarpの基本構文を試す

### 2. プレビュー

```bash
marp -s first.md
```

### 3. PDF出力

```bash
marp first.md -o first.pdf
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

## 参考リンク

- 公式サイト: https://marp.app/
- GitHub: https://github.com/marp-team/marp
- Marp CLI: https://github.com/marp-team/marp-cli
- VS Code拡張: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
- Marpit（構文リファレンス）: https://marpit.marp.app/

---

<!-- _class: lead -->

## さあ、始めましょう！

Marpで素晴らしいプレゼンテーションを作成してください

**Happy Sliding!**
