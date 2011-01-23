---
layout: post
title: レスポンシブウェブデザインについて
category: css
---

いまこの記事を読んでいるモニタのサイズは何インチだろうか？  
iPhone、アンドロイドOS搭載スマートフォン、iPad、ネットブック、ノートPC、デスクトップPCと数年前なら思いもよらなかったモニタ/スクリーンサイズでユーザはウェブサイトを閲覧し始めている。
今後もさらに解像度が異なる環境が増えていくことは間違いない。

ではそのサイズのモニタごとに、スクリーンごとにデザインを作り、HTML/CSSを書き足していくのか？  
その疑問への1つの回答がレスポンシブウェブデザイン(Responsive Web Design)。
多くの場合、CSS3で利用が可能になる予定のMedia Queriesを活用して、モニタ/スクリーンのサイズに合わせて最適なデザインを供給するデザイン/コーディング手法がレスポンシブウェブデザインと呼ばれている。

## レスポンシブウェブデザインの例

- [Simon Collison](http://colly.com/) / Simon Collisonはレスポンシブウェブデザインをいち早く導入したウェブデザイナ
- [Information Architects](http://www.informationarchitects.jp/en/) / WordPressを使ってレスポンシブデザインを実現している
- [Think Vitamin](http://thinkvitamin.com/) / こちらも最近のリニューアルからレスポンシブウェブデザインを導入

実際にサイトを訪れてブラウザのサイズを変更してほしい。サイズに応じてレイアウトが変わっていくのを見てほしい。

## レスポンシブデザインが解決しないこと

*レスポンシブウェブデザインは、特にハンドヘルドデバイス用に最適な解決方法と考えられるが、すべての問題に対する解決を提示できるわけではない。*

A List Apartの記事、[Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/)にてEthan Marcotteは、次のように書いている。

> That’s not to say there isn’t a business case for separate sites geared toward specific devices; 
> for example, if the user goals for your mobile site are more limited in scope than its desktop equivalent, then serving different content to each might be the best approach.

ユーザのゴールに合わせて、ハンドヘルドデバイス用にコンテンツを変更することがベストの解決方法である場合もあるということだ。

[Responsive Web Design: Mobile: Context(Think Vitamin)](http://membership.thinkvitamin.com/library/responsive-web-design/mobile/context)にてNick Pettitも、レスポンシブウェブデザインを採用するかについて、

- スピード

ハンドヘルドデバイスはWIFIで接続することもあるが、多くの場合は3G回線で接続する。すでに多くのユーザが感じているように、iPhone4のSafariがいくら早くなっても、デスクトップのブラウザのスピードには勝てない。JavaScriptやCSSを無意味にハンドヘルドデバイスでも読み込むことはスピードを犠牲にすることになる。

- スクリーンサイズ

言わずもがな、ハンドヘルドデバイスのスクリーンサイズは決して大きくない。`display: none`が解決してくれる問題かもしれないが、実際には難しい場合もある。例えば、レストランの情報をデスクトップからアクセスする場合と、ハンドヘルドデバイスからアクセスする場合とでは、提供すべくコンテンツが異なる。そして画像のサイズについて、iPhone4など解像度の高いスクリーンを持つデバイスも現れはじめており、レスポンシブウェブデザインだけでは解決できない問題もある。

- 場所

ハンドヘルドデバイスは持ち運ぶため存在する。スクリーンサイズの差異による問題点と同じく、デスクトップと、ハンドヘルドデバイスではユーザが求めているコンテンツそのものが異なる場合も多い。デスクトップではほとんど役目を果たすことがないGeolocationも、ハンドヘルドには重要になってくる。

というような観点で検討するべきだと話している。

[EPISODE #6: MOBILE FIRST (The Big Web Show)](http://5by5.tv/bigwebshow/6)では、Luke Wroblewskiは「モバイルからまずデザインを始める」という提案をしている。  
こちらも非常に興味深い。現時点では通常デスクトップ用のデザインからスタートし、その後にハンドヘルドデバイス用に最適化していくのが通常のフローと言えるが、Lukeはモバイルデバイス用のデザインを先に行う事で、モバイルで提供すべきサービスの根幹に集中することができ、デザインだけではなく、UIやサイト構造、そしてインタラクションもシンプルにすることができると話している。  
ミニマムなスタート地点からデスクトップ用デザインなど大きなモニタ/スクリーン、マウスやキーボードなどに対応するデザインを作ることで、すべてのユーザに対して最適なデザインを提供できるという考え方だ。

## Media Queries

レスポンシブデザインでは、多くの場合、CSS3でサポートされる予定のMedia Queriesを活用し、サイズの異なるモニタ/スクリーンに対し最適なデザインを提供する。  
Media Queriesについては、[Hardboiled Web Design](http://hardboiledwebdesign.com/)の著者であるAndy Clarkの記事[Hardboiled CSS3 Media Queries](http://www.stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries)で実例を見る事ができる。

{% highlight css linenos %}
/* iPhone 3 (横向き) ----------- */
@media only screen 
	and (min-width : 321px) {
	/* ここにスタイルルール */
}
{% endhighlight %}

CSS3で拡張されるMedia Queriesでは、`screen`や`print`のようなメディアタイプだけでなく、デバイス自体のサイズやスクリーンのサイズなどを利用できるようになる。  
例:`min-width : 321px`、`max-width : 320p`、`max-device-width : 1024px`  

上記のように既存のスタイルシートに追記することも可能だし、

{% highlight html linenos %}
<link rel="stylesheet" href="smartphone.css" media="only screen and (min-device-width : 320px) and (max-device-width : 480px)">
{% endhighlight %}

というように`link`を使って別のスタイルシートとして管理することもできる。

{% highlight css linenos %}
@import url(smartphone.css) only screen and (min-device-width : 320px) and (max-device-width : 480px);
{% endhighlight %}

W3Cによれば`@import`を使っても上記のように記述することが可能だ。([Media Queries](http://www.w3.org/TR/css3-mediaqueries/#media0))

現時点でのMedia Queriesのサポート状況は、Firefox, Chrome, Safari, Opera, Internet Explorer 9, Android スマートフォン, そしてiOSデバイス(iPhone、iPhone4、iPad、iPod touch)がサポートしている。(※Androidスマートフォン、iPhone、iPod touchについては、W3Cで宣言されているすべての値を利用できるわけではないようだ)

Androidスマートフォン、iPhone、iPod touch、iPadなどのハンドヘルド端末については、
{% highlight html linenos %}
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
{% endhighlight %}

という記述も必要になるだろう。
`meta viewport`については[Safari Reference Library](http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/UsingtheViewport/UsingtheViewport.html)(英語)が詳しい説明をしている。  
またはQuirksmodeの[Combining meta viewport and media queries](http://www.quirksmode.org/blog/archives/2010/09/combining_meta.htm)(英語)も参考になる。

また、IE6〜IE8まではCSS3で拡張される予定のMedia Queriesはサポートされていないので、レスポンシブデザインの実装をしないか、[css3-mediaqueries-js](http://code.google.com/p/css3-mediaqueries-js/)というJavaScriptを使った実装は可能だ。
レスポンシブウェブデザインは*すべてのブラウザで見た目を同じにしなくてはならない*という思想からはほど遠くプログレッシブエンハンスメントという手法に近いので、無理にIE6〜IE8への実装をする必要性はない。  
レスポンシブウェブデザインは、確かにユーザのスクリーンサイズに合わせた最適なデザインを提供することができるが、それができなくてもユーザビリティはマイナスになったりはしない。

## レスポンシブグリッドCSS

レスポンシブグリッドの最大の弱点は、実装がやや大変なこと。現実的にモバイルに最適化されることを想定していないウェブデザインをモバイル用に変更したり、サイズが変わった際にどのようにグリッドが変更していくべきかなど、デザインとテクニックの両面で解決しなければいけない問題点がある。  
そこで現れ始めたのが、レスポンシブウェブデザインのためのグリッドCSSだ。

- [Less Framework3](http://lessframework.com/) 

黄金比をベースに3、5、8、13コラム、最小320pxから1280px以上のモニタ/スクリーンに合わせてコラムグリッドの数を変更する。実際に配布されているのは、`body`に対してmedea queriesを使って幅のサイズを指定するところのみ。コラムグリッドについては、配布されるファイルのコメントを参考にグリッド用のクラスを作成する。非常にミニマムな構成なので、レスポンシブウェブデザインを学ぶ上でのソースコードリーディングに最適だ。

- [The 1140 grid](http://cssgrid.net/)

こちらは、その名前の通り1140px以上を最大幅とするレスポンシブグリッドCSS。Less Framework3と異なる点はコラムグリッド用のクラスは用意されているところ。そしてコラムグリッドとガター(コラムとコラムの間のマージン)はパーセントで指定されているところ。画像に対しても`max-width`を指定し、モニタ/スクリーンのサイズに対して最適なサイズに変更されるようになっていたりする。Photoshopのファイルも配布している。

## 参考リンク

- [Responsive Web Design (A list Apart)](http://www.alistapart.com/articles/responsive-web-design/)
- [Media Queries (W3C)](http://www.w3.org/TR/css3-mediaqueries/)
- [Responsive Web Design: What It Is and How To Use It (Smashing Magazine)](http://www.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
- [CSS Media Queries & Using Available Space (CSS-Tricks)](http://css-tricks.com/css-media-queries/)
- [How to fit your website for the Apple iPad (x7 Labs)](http://x7.fi/2010/02/12/how-to-fit-your-website-for-the-apple-ipad/)
- [Combining meta viewport and media queries (Quirksmode)](http://www.quirksmode.org/blog/archives/2010/09/combining_meta.html)
- [Configuring the Viewport (Safari Reference Library)](http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/UsingtheViewport/UsingtheViewport.html)
- [Mobile First Helps with Big Issues (LukeW)](http://www.lukew.com/ff/entry.asp?1117)
- [EPISODE #6: MOBILE FIRST (The Big Web Show)](http://5by5.tv/bigwebshow/6)
- [Responsive Web Design: Mobile: Context (Think Vitamin)](http://membership.thinkvitamin.com/library/responsive-web-design/mobile/context)
