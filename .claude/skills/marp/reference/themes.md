# テーマとレイアウト

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

## テーマ別の注意点

- `invert` クラスは `default` テーマでは正しく動作するが、`gaia` テーマでは期待通りに表示されない場合がある
- 新しいレイアウトを試す際は、必ずプレビューで確認
