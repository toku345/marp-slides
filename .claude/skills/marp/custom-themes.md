# Marp カスタムテーマ作成

## 基本的なカスタムテーマ

カスタムCSSテーマを作成できます:

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

## テーマの使用

```yaml
---
marp: true
theme: custom
---
```

## テーマの配置

1. `themes/` ディレクトリにCSSファイルを配置
2. `.marprc.yml` で `themeSet: ./themes` を設定
3. Front Matterで `theme: テーマ名` を指定

## カスタムクラスの定義

```css
/* @theme custom */

section.special {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

使用:

```markdown
<!-- _class: special -->

# 特別なスライド
```

## テーマが適用されない場合

- `theme` ディレクティブのスペルを確認
- カスタムテーマファイルのパスを確認
- `@theme` コメントがCSS内にあるか確認
