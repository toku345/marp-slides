---
marp: true
theme: gaia
paginate: true
backgroundColor: #fff
html: true
---

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

![bg left:50% contain](https://marp.app/assets/marp.svg)

# Marp入門

toku345

---

## Marpとは

**Marp** (Markdown Presentation Ecosystem)

- マークダウン形式でプレゼンテーションスライドを作成
- PowerPointのような複雑なツールは不要
- シンプルなマークダウンでプロフェッショナルなスライド
- バージョン管理（Git）が容易

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

<!-- _class: lead -->

# lead クラス

`<!-- _class: lead -->` で中央揃え

---

<!-- _class: invert -->
<!-- _backgroundColor: #2d3436 -->

# invert クラス

`<!-- _class: invert -->` で色反転

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

## 高度なレイアウト（2カラム実例）

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div>

### 左カラム

- HTML + CSSで自由配置
- `display: grid` を活用

</div>

<div>

### 右カラム

- 比較表示に最適
- 製品紹介・ビフォーアフター

</div>

</div>

---

## CSSスタイリング実例

<style scoped>
.highlight { background: linear-gradient(transparent 60%, #ffeb3b 60%); }
.big { font-size: 1.5em; font-weight: bold; }
.accent { color: #e91e63; }
</style>

Marpでは **インラインCSS** と **scoped style** が使えます

### こんな装飾が可能

- <span class="highlight">マーカー風ハイライト</span>
- <span class="big">サイズ変更</span>
- <span class="accent">アクセントカラー</span>

---

## Marp CLIの基本コマンド

### プレビュー

```bash
# サーバー起動
marp -s . --allow-local-files

# ブラウザで http://localhost:8080/slides/file.md にアクセス
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

## 参考リンク

- 公式サイト: https://marp.app/
- GitHub: https://github.com/marp-team/marp
- Marp CLI: https://github.com/marp-team/marp-cli
- VS Code拡張: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
- Marpit（構文リファレンス）: https://marpit.marp.app/

---

<!-- _class: lead -->

![bg contain right:35% 80%](./images/happy-sliding.png)

<!-- fit -->
## さあ、Marpで
## スライドを作成しよう！
（分割レイアウトと画像配置の例です）
