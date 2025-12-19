# マークダウン構文とディレクティブ

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

| ディレクティブ | 説明 |
|---------------|------|
| `<!-- class: ... -->` | CSSクラスを適用 |
| `<!-- backgroundColor: ... -->` | 背景色を変更 |
| `<!-- color: ... -->` | 文字色を変更 |
| `<!-- paginate: true/false -->` | ページ番号の表示/非表示 |
| `<!-- header: "..." -->` | ヘッダーテキスト |
| `<!-- footer: "..." -->` | フッターテキスト |

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

Front Matter で `html: true` を設定後:

```html
<div style="display: grid; grid-template-columns: 1fr 1fr;">
  <div>左カラム</div>
  <div>右カラム</div>
</div>
```
