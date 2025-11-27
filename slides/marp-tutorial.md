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

![bg left:48% 90%](https://marp.app/assets/marp.svg)

# Marp入門

**このスライド、Markdownで作られています**

toku345

---

<!-- _class: lead -->

## スライド作成、
## 面倒じゃないですか？

- PowerPointを開くのが億劫
- デザイン調整に時間を取られる
- Gitで差分管理できない
- コードの貼り付けが美しくない

---

## Marpとは

**Markdown → スライド変換ツール**

| 従来 | Marp |
|------|------|
| マウスでポチポチ | Markdownを書くだけ |
| デザイン調整地獄 | テーマを選ぶだけ |
| 差分管理不可 | Git完全対応 |
| コード貼り付け汚い | シンタックスハイライト |

---

## 組み込みテーマ（3種類）

**今使っているのは `gaia`**

| テーマ | 特徴 |
|--------|------|
| **default** | シンプル、ビジネス向け |
| **gaia** | モダン、カラフル |
| **uncover** | ミニマル、テキスト中心 |

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

<!-- _backgroundImage: url('https://marp.app/assets/hero-background.svg') -->

## 背景画像（全体背景）

**backgroundImage ディレクティブで背景を設定**

`<!-- _backgroundImage: url('image.svg') -->`

---

## 背景画像（分割レイアウト）

![bg contain right:40% 80%](./images/happy-sliding.png)

`![bg right:40%](image.png)`

- `right` / `left` で配置を指定
- パーセントで幅を調整

---

## 高度な機能（HTML + CSS）

<style scoped>
.highlight { background: linear-gradient(transparent 60%, #ffeb3b 60%); }
</style>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">

<div>

### 2カラムレイアウト

- HTML + CSSで自由配置
- 比較表示に最適

</div>

<div>

### CSS装飾

- <span class="highlight">マーカー風ハイライト</span>
- サイズ・色の変更も自在

</div>

</div>

---

## 今日から始めるなら

### インストール不要で試す

```bash
npx @marp-team/marp-cli@latest slide.md -o output.html
```

### VS Code派なら

1. 「**Marp for VS Code**」拡張をインストール
2. `.md` ファイルを作成
3. プレビューを開く

---

<!-- _class: lead -->

![bg contain right:35% 80%](./images/happy-sliding.png)

## Markdownが書けるなら
## もうスライドは作れる

**公式サイト**: https://marp.app/
