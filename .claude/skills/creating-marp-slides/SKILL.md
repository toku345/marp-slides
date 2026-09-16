---
name: creating-marp-slides
description: このリポジトリの Marp スライドを作成・修正・レビューし、HTML/PDF/PPTX に出力する際に使用する。画像配置、対象を絞ったビルド、表示確認を扱う。
---

# Marp スライド作成

Claude Code / Codex 共通の作業ガイド。特定のサブエージェントや MCP ツールを前提にしない。
パスとコマンドは、特記しない限りリポジトリルートを基準とする。

## 作成・修正

対象ファイルと依頼された内容・出力形式を確認する。既存スライドのテーマや構成を尊重し、
新規作成で指定がなければ次の Front Matter を出発点にする。

```yaml
---
marp: true
theme: default
paginate: true
---
```

`marp: true` は必須。テーマとページ番号は用途に合わせて変更する。

- スライドは `slides/*.md`、画像は `slides/images/`、カスタムテーマは `themes/*.css`。
- 画像は `./images/filename.png` で参照する。プレビューと HTML 出力で同じ相対配置を保つための規約。
- 組み込みテーマは `default` / `gaia` / `uncover`。いずれも `invert` をサポートする。
- Marp 設定は `.marprc.yml`、コマンドの定義は `package.json` を正とする。

## 開発コマンド

依存関係がなければ `bun install`。以下の scripts は全スライドを対象にする。

| コマンド | 用途 |
| --- | --- |
| `bun run preview` | `http://localhost:8080/slides/<name>.md` を表示 |
| `bun run build` | HTML + PDF |
| `bun run build:html` | HTML と `dist/images/` への画像コピー |
| `bun run build:pdf` | PDF |
| `bun run build:pptx` | PPTX |
| `bun run lint` | Markdown と JavaScript の lint |

特定ファイルのみの依頼では、インストール済みの CLI で対象を絞る。例:

```bash
mkdir -p dist
bun run copy:images
bun run -- marp slides/example.md -o dist/example.html --html --allow-local-files
bun run -- marp slides/example.md -o dist/example.pdf --pdf --allow-local-files
bun run -- marp slides/example.md -o dist/example.pptx --pptx --allow-local-files
bun run -- markdownlint slides/example.md
```

必要な形式だけ実行する。画像コピーは HTML 用。HTML を渡す場合は `dist/images/` も含める。
PDF/PPTX の出力には対応ブラウザが必要。通常の PPTX はスライドを画像として格納するため、
編集可能なテキストや図形が必要という依頼なら、この出力で要件を満たすか確認する。

## 検証

- 変更対象を lint し、要求された形式を生成してファイルの存在を確認する。
- 表示に関わる変更は利用可能なブラウザや画像出力で確認する。レビュー依頼では対象の全スライドを確認する。
- lint / ビルド成功だけで、見切れや画像表示の確認済みとはしない。
- 結果には対象、実行した検証、出力先、未確認の事項を簡潔に記す。

情報量や見切れを調整するときは [コンテンツ最適化](references/content-optimization.md)、
画像・テーマ・変換の問題があるときは [トラブルシューティング](references/troubleshooting.md) を読む。

仕様を確認する場合は [Marp CLI](https://github.com/marp-team/marp-cli) と
[組み込みテーマ](https://github.com/marp-team/marp-core/blob/main/themes/README.md) を参照する。
