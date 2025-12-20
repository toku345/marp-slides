---
name: creating-marp-slides
description: slides/ ディレクトリにMarpスライドを作成、またはプレビュー・ビルドする際に参照する。画像配置ルールとプロジェクトコマンドを提供する。
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

## Marp の最新変更（基盤モデルより優先）

<!--
このセクションは基盤モデルの知識カットオフ後の変更を記載する。
Marpに新機能や破壊的変更があった場合、ここに追記することで
Claudeの古い知識を上書きできる。

記載例:
- [2025-01] Marp CLI v4.0: --watch オプションが --live に変更
- [2025-02] 新ディレクティブ `<!-- transition: fade -->` 追加
-->

現時点で特記事項なし。最新情報は https://github.com/marp-team/marp-cli/releases を参照。
