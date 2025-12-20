---
name: marp-slides
description: このプロジェクトでMarpスライドを作成・編集する際に使用する。プロジェクト固有のルールと設定を提供する。
---

# Marp スライドプロジェクト

## プロジェクト固有のコマンド

```bash
bun run preview   # プレビュー → http://localhost:8080/slides/xxx.md
bun run build     # dist/ に出力
```

## 画像配置ルール（重要）

**画像は必ず `slides/images/` に配置する。**

```markdown
![](./images/diagram.png)
![bg right:40%](./images/photo.jpg)
```

理由: CLI (`marp -s .`) と VS Code プレビューの両方で動作する唯一の配置。
他の場所（`assets/images/` 等）では CLI サーバーモードで表示されない。

## プロジェクト構造

```
slides/              # スライドファイル
  └── images/        # 画像はここに配置
themes/              # カスタムテーマ
dist/                # ビルド出力先
```

## 画像が表示されない場合

1. 画像が `slides/images/` にあるか確認
2. 相対パス `./images/xxx.png` で参照しているか確認
3. サーバーがプロジェクトルートから起動されているか確認
