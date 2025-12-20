---
name: marp
description: このプロジェクトでMarpスライドを作成・編集・ビルドする際に使用。プロジェクト固有の設定と注意点を提供。
---

# Marp スライド作成スキル

## プロジェクト固有のコマンド

```bash
bun run preview   # プレビューサーバー → http://localhost:8080/slides/xxx.md
bun run build     # dist/ へビルド
```

## プロジェクト構造

```
slides/              # スライドファイルをここに作成
  └── images/        # 画像は必ずここに配置（重要）
themes/              # カスタムテーマ
dist/                # 出力先
```

## 重要な注意点

### 画像配置（必読）

**画像は必ず `slides/images/` に配置し、相対パスで参照する。**

```markdown
![](./images/diagram.png)
![bg right:40%](./images/photo.jpg)
```

他の場所（`assets/`等）に配置すると、CLIプレビューで表示されない。
詳細: [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163)

### コンテンツオーバーフロー

1スライドに詰め込みすぎると下部が見切れる。複数スライドに分割すること。

### テーマの注意点

`invert`クラスは`gaia`テーマで期待通り動作しない場合がある。プレビューで必ず確認。

## 追加リファレンス

問題発生時のみ参照:
- `troubleshooting.md` - 画像表示、PDF出力、サーバー起動の問題解決
