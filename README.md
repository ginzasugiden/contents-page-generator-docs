# コンテンツページ生成ちゃん 審査用ドキュメントサイト

IT導入補助金のITツール登録における事務局審査担当者向けに、製品「コンテンツページ生成ちゃん」の **機能一覧・機能構成図・価格表** を掲載する静的サイトです。

**公開URL**: https://ginzasugiden.github.io/contents-page-generator-docs/

## 構成

```
contents-page-generator-docs/
├── index.html              トップページ（製品概要 + 全体ナビ）
├── features.html           機能一覧
├── architecture.html       機能構成図
├── pricing.html            価格表（月額/年払い切替）
├── assets/
│   ├── css/style.css       全ページ共通スタイル
│   └── js/main.js          インタラクション（最小限）
├── README.md
├── .gitignore
└── .nojekyll               Jekyll処理を無効化
```

## 製品情報

- **製品名**: コンテンツページ生成ちゃん
- **提供形態**: クラウド型SaaS
- **提供事業者**: 株式会社GSD（銀座東京フラワー）
- **製品紹介URL**: https://ginzasugiden.com/contents-page-generator/
- **用途**: 楽天市場向けコンテンツページの自動生成

## 価格

| 支払サイクル | 価格（税抜） | 価格（税込10%） |
|---|---|---|
| 月額 | 9,800円/月 | 10,780円/月 |
| 年払い | 117,600円/年 | 129,360円/年 |

初期費用なし。外部API（AI文章生成・AI画像生成・AI翻訳・楽天API）の利用料は実費負担。

## ローカル確認

ローカルで開く場合はファイルを直接ブラウザで開くか、簡易サーバを立ち上げてください。

```bash
# Python 3 がある場合
python -m http.server 8000
# → http://localhost:8000/
```

## 公開手順

```bash
# 1. 全ファイルをコミット
git add .
git commit -m "Initial commit: 審査用ドキュメントサイト"

# 2. GitHub にプッシュ
git remote add origin https://github.com/ginzasugiden/contents-page-generator-docs.git
git push -u origin main

# 3. GitHub リポジトリの Settings → Pages へ
#    - Source: Deploy from a branch
#    - Branch: main / (root)
#    - 保存後、数分で https://ginzasugiden.github.io/contents-page-generator-docs/ が有効になる
```

## 表記ルール（重要）

審査資料として、AIエンジンの抽象表記を徹底しています。将来エンジン変更時にドキュメント修正を不要とするためです。

- 画像生成 → **「AI画像生成」** のみ（Midjourney / Nano Banana / Gemini / DALL-E 等の固有名詞は使用しない）
- 文章生成 → **「AI文章生成」** のみ（ChatGPT / OpenAI / GPT 等の固有名詞は使用しない）
- 翻訳 → **「AI翻訳」** のみ（DeepL 等の固有名詞は使用しない）
- 楽天連携のみ「楽天ShopPage API」「楽天RMS API」と具体名OK
