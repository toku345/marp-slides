# Marp 画像配置ガイド

## 画像配置のベストプラクティス

**スライドで使用する画像は `slides/images/` に配置することを強く推奨します。**

この配置により:
- CLI プレビュー (`marp -s .`) で正しく表示される
- VS Code Marp 拡張機能のプレビューでも正しく表示される
- 相対パス `./images/filename.png` で参照可能

```markdown
<!-- スライド内での画像参照 -->
![](./images/diagram.png)
![bg right:40%](./images/photo.jpg)
```

**注意**: `assets/images/` など他の場所に配置すると、CLI サーバーモードで画像が表示されない問題が発生します。
詳細は [GitHub Issue #163](https://github.com/marp-team/marp-cli/issues/163) を参照。

## 通常の画像

```markdown
![](image.png)
```

## サイズ指定

```markdown
![width:600px](image.png)
![height:400px](image.png)
![w:600 h:400](image.png)
```

## 背景画像

```markdown
![bg](background.jpg)
![bg right](image.jpg)          # 右半分に配置
![bg left:40%](image.jpg)       # 左40%に配置
![bg fit](image.jpg)            # フィット
![bg contain](image.jpg)        # 含める
![bg cover](image.jpg)          # カバー
```

## 複数の背景画像

```markdown
![bg](image1.jpg)
![bg](image2.jpg)
![bg](image3.jpg)
```

## 画像が表示されない場合

### CLI プレビューで表示されない場合

Marp CLI のサーバーモード (`marp -s`) は、サーバールートディレクトリとそのサブディレクトリ内のファイルのみを配信します。

**解決策**:
1. 画像を `slides/images/` に配置
2. サーバーをプロジェクトルートから起動: `marp -s . --allow-local-files`
3. 相対パスで参照: `./images/filename.png`

### VS Code プレビューで表示されない場合

- 絶対パス（`/assets/images/...`）は VS Code では動作しません
- 相対パス（`./images/...`）を使用してください

### 一般的な対処法

- `.marprc.yml` で `allowLocalFiles: true` を設定
- `--allow-local-files` フラグを使用
