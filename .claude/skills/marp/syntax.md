# Marp マークダウン構文ガイド

## スライドの基本構造

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

```javascript
function hello() {
  console.log("Hello, Marp!");
}
```
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

特定のスライドのみに設定を適用:

```markdown
<!-- _class: lead -->
<!-- _backgroundColor: #123 -->
<!-- _color: #fff -->

# このスライドだけ特別なスタイル
```

- `_` プレフィックス: 現在のスライドのみに適用
- プレフィックスなし: 以降のすべてのスライドに適用

### よく使うディレクティブ

| ディレクティブ | 説明 |
|--------------|------|
| `<!-- class: ... -->` | CSSクラスを適用 |
| `<!-- backgroundColor: ... -->` | 背景色を変更 |
| `<!-- color: ... -->` | 文字色を変更 |
| `<!-- paginate: true/false -->` | ページ番号の表示/非表示 |
| `<!-- header: "..." -->` | ヘッダーテキスト |
| `<!-- footer: "..." -->` | フッターテキスト |

## 数式（KaTeX）

```markdown
インライン数式: $E = mc^2$

ブロック数式:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## スピーカーノート

```markdown
---

# スライドタイトル

<!--
これはスピーカーノートです。
スライドには表示されません。
-->
```

## HTMLの埋め込み

Front Matterで `html: true` を設定後:

```html
<div style="display: grid; grid-template-columns: 1fr 1fr;">
  <div>左カラム</div>
  <div>右カラム</div>
</div>
```
