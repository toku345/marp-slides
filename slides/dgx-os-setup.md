---
marp: true
theme: default
paginate: true
---

<!-- _class: lead -->

# NVIDIA DGX OS セットアップガイド

AIワークロード向けターンキーソリューション

2025-11-30

---

## DGX OS とは

- **NVIDIA DGXシステム専用OS**
  - AIおよび分析ワークロード向けに最適化
  - プリインストール済みのターンキーソリューション

- **最新バージョン情報**
  - DGX OS 7（2025年1月リリース） - 最新版
  - DGX OS 6（Ubuntu 22.04ベース）

---

## 対応システム

| システム | 対応バージョン |
|---------|--------------|
| DGX H100/H200 | DGX OS 6/7 |
| DGX A100 | DGX OS 5/6 |
| DGX-2 | DGX OS 5/6 |
| DGX-1 | DGX OS 5/6 |
| DGX Station | DGX OS 5/6 |

---

## セットアップ前提条件

### 必要な接続環境
- BMC経由のKVM接続、または
- 物理モニター・キーボード接続

### インストール方法
- **リモート**: BMC経由でISOイメージをマウント
- **ローカル**: UEFI対応USBフラッシュドライブまたはDVD-ROM

---

## セットアップ手順（1/4）

### 1. 暗号化ドライブの解除
- 該当する場合、パスフレーズ「**nvidia3d**」を入力

### 2. EULA承認
- NVIDIAソフトウェアライセンス契約に同意

### 3. システム設定
- 言語・ロケール選択
- キーボード国設定
- タイムゾーン設定
- UTC時刻確認

---

## セットアップ手順（2/4）

### 4. ユーザーアカウント作成

**重要な注意点:**
- ユーザー名は**小文字のみ**使用可能
- 管理者ユーザー、BMC、GRUBで**同じ名前を推奨**
- **強力なパスワード**を設定

---

## セットアップ手順（3/4）

### 5. GRUBパスワード設定

- **最低8文字**必須
- セキュリティ強化のため設定を推奨

### 6. ネットワーク設定

- プライマリネットワークインターフェース選択
  - 例: `enp1s0f0`
- DHCPまたはスタティックIP設定

---

## セットアップ手順（4/4）

### 7. ホスト名設定

- システムを識別する適切なホスト名を設定
- ネットワーク環境に応じた命名規則に従う

---

## セットアップ後のタスク

1. **即時のパッケージ更新**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **DOCAドライバ追加**（サーバー向け）

3. **システム再起動**
   ```bash
   sudo reboot
   ```

---

## セットアップ後のタスク（続き）

4. **追加ユーザーアカウント作成**
   - リモートアクセス用のアカウントを作成

5. **NVIDIA RAID構成サービスの確認**
   ```bash
   sudo systemctl status nvidia-raid-config
   ```

---

## 参考リソース

- **DGX OS 7 User Guide**
  https://docs.nvidia.com/dgx/dgx-os-7-user-guide/

- **DGX OS 6 User Guide**
  https://docs.nvidia.com/dgx/dgx-os-6-user-guide/

- **DGX Software Stack Installation Guide**
  https://docs.nvidia.com/dgx/dgx-software-stack-installation-guide/

---

<!-- _class: lead -->

# まとめ

- DGX OSはAIワークロード向けに最適化されたターンキーソリューション
- セットアップは7つの主要ステップで完了
- セキュリティ設定（GRUB、パスワード）を適切に構成
- セットアップ後の更新とサービス確認を忘れずに実施
