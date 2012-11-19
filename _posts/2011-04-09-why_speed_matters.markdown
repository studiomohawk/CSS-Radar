---
layout: post
title: パフォーマンス最適化
category: optimization
date: 2011-04-09 11:46:40
tldr: "サイトのロード時間の早さはもはや大事な機能の1つ。最適化はバックエンドの人がやる、そんな風に思ってたりはしないだろうか？ ページロード時間の80%はフロントエンドで最適化できる。最適化の意味とその実践について紹介。"
---

## パフォーマンス最適化の意味 {#whatis}

ハードウェアの値段が下がりネットの接続環境も高速化していく。ブラウザも高速化を競い合っている。  
それでもなお、GoogleもYahoo!、FacebookもTwitterもページのロード時間を短縮するテクニックを生み出している。

なぜだろうか？

もちろんカスタマの満足度を上げ、終局的には売り上げに貢献するからだ。

GoogleもYahoo!も世界で1位2位を争うほどすばらしいデータセンタを所有しているのだから早くて当たり前。
なんて思っていないだろうか？
ページのロード時間の80%はフロントエンドで最適化できる。バックエンドが重要ではないとは言わないが我々フロントエンドデベロッパのもっとも大切なタスクの1つがページの最適化。

## ページのロード時間で失うモノ {#why}

サイト最適化ファームのStrangeloopがMashable!に寄稿した記事、[Why Websites Are Slow &amp; Why Speed Really Matters [INFOGRAPHIC]](http://mashable.com/2011/04/06/site-speed/)
によると、  

1秒のロード時間の増加で、

- 7%のコンバージョン
- 11%のPV
- 16%のカスタマ満足度

を失うとある。  

さらに、3秒待たされると57%のカスタマはサイトから離脱しそのうち80%のユーザはそのサイトへ戻ってこず、そのうち50%がネガティブな経験を他の人にも共有する。  
もっと加えると平均的にユーザは実際のロード時間より15%ほど追加でロードにかかっていると感じ、人にその話をする場合、実際のロード時間より35%遅いと伝えている。

3クリックルールにはもう意味がないかも知れないが3秒ルールは実際に存在する。  

## Steve Soudersの教え {#souders}

元Yahoo!のパフォーマンス担当責任者であり、現在はGoogleで働くSteve Soudersの[ハイパフォーマンスWebサイト](http://www.oreilly.co.jp/books/9784873113616/)はこのトピックの中で確実に読んでおくべき本。
彼が作り出した14のルールはYahoo!のYSlowのチェック項目にもなっているので見たことがあるはずだ。  
GoogleのPageSpeedでも近しいチェック項目を持っているのでそれぞれの項目が何を意味して、それがどうしてページロード時間の最適化につながるかについて覚えておくことをおすすめする。

## 最適化チェックツール {#check}

- [Yahoo! YSlow for Firebug](http://developer.yahoo.com/yslow/)
- [Page Speed](http://code.google.com/speed/page-speed/)

  先ほどもその名前が出てきたがこの2つは絶対に必要なブラウザ拡張。Firefox+Firebugでも利用できるが今では両方ともChromeでも動作する。Page
  Speedは[オンラインバージョン](http://pagespeed.googlelabs.com/)も公開されモバイルでもチェックができる。

 - [GTmetrix](http://gtmetrix.com/)

   こちらはYSlowとPage Speedを同時にチェックするオンラインツール。ブックマークレットも配布されている。

 - [loads.in](http://loads.in/)

   せっかく最適化しても結果をコンスタントなテスト環境でチェックできなければ意味がない。  
   Loads.inでは珍しく日本のサーバからのロード時間をテストしてくれる。ついでにブラウザ別の結果も見ることができるのでおすすめのオンラインツール。

## 最適化ツール {#tool}

### CSSスプライト

- オンラインツール: [CSS Sprite Generator](http://spritegen.website-performance.org/)
- Ruby(ターミナルから利用): [merbjedi/sprite - GitHub](https://github.com/merbjedi/sprite)
- SASS連携: [Generate CSS Sprites on the Fly with Lemonade](http://www.hagenburger.net/BLOG/Lemonade-CSS-Sprites-for-Sass-Compass.html)

### JavaScriptとCSSの結合と縮小化

- Ruby(ターミナルから利用): [Juicer - a CSS and JavaScript packaging tool / Ruby - cjohansen.no](http://cjohansen.no/en/ruby/juicer_a_css_and_javascript_packaging_tool)
- オンラインツール (CSSとJS): [Online YUI Compressor](http://www.refresh-sf.com/yui/)
- オンラインツール (CSS): [Clean CSS](http://www.cleancss.com/)
- オンラインツール (JS): [Closure Compiler Service](http://closure-compiler.appspot.com/home)

### 画像最適化

- Mac OS X GUI: [ImageOptim – a PNG/JPEG/GIF optimizer for Mac OS X](http://imageoptim.pornel.net/)
　
### バラバラのツールは必要ない？

そんなにたくさん上げられても使いこなすまで時間がかかりそうだと思ったら、 
[以前紹介した](http://css.studiomohawk.com/tool/2011/03/15/html5boilerplate/)  
[HTML5
Boilerplate](http://html5boilerplate.com/)のビルドスクリプトを利用することをおすすめする。  
CSSスプライト以外はHTML5 Boilerplateのビルドスクリプトでも行える。

### .htaccess(サーバ側で設定できるなら、その方がベター)

- [.htaccess on HTML5 Boilerplate](https://github.com/paulirish/html5-boilerplate/blob/master/.htaccess)

  HTML5
  Boilerplateの.htaccessを利用するだけでYSlowのスコアが15ポイントはあがるのではないかと思うほどすばらしいファイル。

## スピードについて {#aboutspeed}

つい先日FireFox4がリリースされたがChromeのスピードには及ばない。SafariもOperaも起動速度に関してはかなり気を使っているしページのレンダリングに関しても同様。  
毎日確実に利用するものだからこそスピードが大事。ということだろう。  

ウェブサイトも同様にスピードが大事。  
Googleのページランクに関わるからでも上に書いた実質的なロスでもかまわない、どうにかしてページロード速度の最適化が大切であるかをステークホルダと共有し実践してほしい。  
もちろん個人サイトでどんな風にやっていくべきかを実験するのもいいだろう。

私自身かなり気を使って最適化をしている。
このサイトは海外のサーバなので日本では少しレスポンスが遅く他の個人サイトと同様Amazon S3に移行する予定だ。  

すると、.htaccessが使えないのでRakeを使って自動化を行うよう調整中。
Amazonのクラウドサービスを使ってみるというのもいい経験になったしRakeによるビルド/デプロイの自動化もツールとして昇華しやすいので会社でも役に立つと思っている。
