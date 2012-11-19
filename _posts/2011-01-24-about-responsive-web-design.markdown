---
layout: post
title: レスポンシブウェブデザイン
category: css
date: 2011-01-24 00:00:00
update: 2011-11-19T13:07:17+09:00
tldr: "間違いなく2011年のウェブデザインのキーワードはレスポンシブウェブデザイン。まだまだコマーシャルな大きなプロジェクトでは実装例が少ないが、この2、3年でデファクトになっていくだろうこのキーワードについて知っておきたいことを紹介しよう。"
---

## レスポンシブウェブデザインとは {#whatis}

いまこの記事を読んでいるモニタのサイズは何インチだろうか？  
iPhone、アンドロイドOS搭載スマートフォン、iPad、ネットブック、ノートPC、デスクトップPCと数年前なら思いもよらなかったモニタ/スクリーンサイズでユーザはウェブサイトを閲覧し始めている。
今後もさらに解像度が異なる環境が増えていくことは間違いない。

ではそのサイズのモニタごとに、スクリーンごとにデザインを作り、HTML/CSSを書き足していくのか？  
その疑問への1つの回答がレスポンシブウェブデザイン(Responsive Web Design)。  
多くの場合、CSS3で利用が可能になる予定のMedia Queriesを活用して、モニタ/スクリーンのサイズに合わせて最適なデザインを供給するデザイン/コーディング手法がレスポンシブウェブデザインと呼ばれている。

## レスポンシブウェブデザインの例 {#ex}

- [Simon Collison](http://colly.com/) / Simon Collisonはレスポンシブウェブデザインをいち早く導入したウェブデザイナ
- [Information Architects](http://www.informationarchitects.jp/en/) / WordPressを使ってレスポンシブデザインを実現している
- [Think Vitamin](http://thinkvitamin.com/) / こちらも最近のリニューアルからレスポンシブウェブデザインを導入
- [The Boston Globe](http://www.bostonglobe.com/) / メジャーな新聞社のサイト。ここまで大きな規模は初
- [CSS-Tricks](http://css-tricks.com/) / レスポンシブウェブデザイン + CSS3のアニメーションを組み込んだ意欲作

## レスポンシブウェブデザインが解決しないこと {#whatisnot}

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
こちらも非常に興味深い。現時点では通常デスクトップ用のデザインからスタートし、その後にハンドヘルドデバイス用に最適化していくのが通常のフローと言えるが、Lukeはモバイルデバイス用のデザインを先に行う事でモバイルで提供すべきサービスの根幹に集中することができ、デザインだけではなく、UIやサイト構造、そしてインタラクションもシンプルにすることができると話している。  
ミニマムなスタート地点からデスクトップ用デザインなど大きなモニタ/スクリーン、マウスやキーボードなどに対応するデザインを作ることで、すべてのユーザに対して最適なデザインを提供できるという考え方だ。

## Media Queries {#mediaqueries}

レスポンシブデザインでは多くの場合、CSS3でサポートされる予定のMedia Queriesを活用しサイズの異なるモニタ/スクリーンに対し最適なデザインを提供する。  
Media Queriesについては、[Hardboiled Web Design](http://hardboiledwebdesign.com/)の著者であるAndy Clarkの記事[Hardboiled CSS3 Media Queries](http://www.stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries)で実例を見る事ができる。

{% highlight css %}
/* iPhone 3 (横向き) ----------- */
@media only screen 
	and (min-width : 321px) {
	/* ここにスタイルルール */
}
{% endhighlight %}

CSS3で拡張されるMedia Queriesでは、`screen`や`print`のようなメディアタイプだけでなく、デバイス自体のサイズやスクリーンのサイズなどを利用できるようになる。  
例:`min-width : 321px`、`max-width : 320p`、`max-device-width : 1024px`  

上記のように既存のスタイルシートに追記することも可能だし、

{% highlight html %}
<link rel="stylesheet" href="smartphone.css" media="only screen and (min-device-width : 320px) and (max-device-width : 480px)">
{% endhighlight %}

というように`link`を使って別のスタイルシートとして管理することもできる。

{% highlight css %}
@import url(smartphone.css) only screen and (min-device-width : 320px) and (max-device-width : 480px);
{% endhighlight %}

W3Cによれば`@import`を使っても上記のように記述することが可能。([Media Queries](http://www.w3.org/TR/css3-mediaqueries/#media0))

現時点でのMedia Queriesのサポート状況は、Firefox, Chrome, Safari, Opera, Internet Explorer 9, Android スマートフォン, そしてiOSデバイス(iPhone、iPhone4、iPad、iPod touch)がサポートしている。(※Androidスマートフォン、iPhone、iPod touchについては、W3Cで宣言されているすべての値を利用できるわけではないようだ)

Androidスマートフォン、iPhone、iPod touch、iPadなどのハンドヘルド端末については、
{% highlight html %}
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
{% endhighlight %}

という記述も必要になるだろう。
`meta viewport`については[Safari Reference Library](http://developer.apple.com/library/safari/#documentation/appleapplications/reference/safariwebcontent/UsingtheViewport/UsingtheViewport.html)(英語)が詳しい説明をしている。  
またはQuirksmodeの[Combining meta viewport and media queries](http://www.quirksmode.org/blog/archives/2010/09/combining_meta.htm)(英語)も参考になる。

また、IE6〜IE8まではCSS3で拡張される予定のMedia Queriesはサポートされていないので、レスポンシブデザインの実装をしないか、[css3-mediaqueries-js](http://code.google.com/p/css3-mediaqueries-js/)というJavaScriptを使った実装は可能だ。  
レスポンシブウェブデザインは*すべてのブラウザで見た目を同じにしなくてはならない*という思想からはほど遠くプログレッシブエンハンスメントという手法に近いので、無理にIE6〜IE8への実装をする必要性はない。  
レスポンシブウェブデザインは、確かにユーザのスクリーンサイズに合わせた最適なデザインを提供することができるが、それができなくてもユーザビリティはマイナスになったりはしない。

## レスポンシブグリッドCSS {#gridcss}

レスポンシブグリッドの最大の弱点は、実装がやや大変なこと。現実的にモバイルに最適化されることを想定していないウェブデザインをモバイル用に変更したり、サイズが変わった際にどのようにグリッドが変更していくべきかなど、デザインとテクニックの両面で解決しなければいけない問題点がある。  
そこで現れ始めたのが、レスポンシブウェブデザインのためのグリッドCSSだ。

- [Less Framework](http://lessframework.com/)

黄金比をベースに3、5、8、13コラム、最小320pxから1280px以上のモニタ/スクリーンに合わせてコラムグリッドの数を変更する。実際に配布されているのは、`body`に対してmedea queriesを使って幅のサイズを指定するところのみ。コラムグリッドについては、配布されるファイルのコメントを参考にグリッド用のクラスを作成する。非常にミニマムな構成なので、レスポンシブウェブデザインを学ぶ上でのソースコードリーディングに最適だ。

- [The 1140 grid](http://cssgrid.net/)

こちらは、その名前の通り1140px以上を最大幅とするレスポンシブグリッドCSS。Less Framework3と異なる点はコラムグリッド用のクラスは用意されているところ。そしてコラムグリッドとガター(コラムとコラムの間のマージン)はパーセントで指定されているところ。画像に対しても`max-width`を指定し、モニタ/スクリーンのサイズに対して最適なサイズに変更されるようになっていたりする。Photoshopのファイルも配布している。

## レスポンシブウェブデザインの問題点 {#problem}

### レスポンシブイメージ

まさに魔法とも思える画像へのレスポンシブ対応である

{% highlight css %}
img,
embed,
object,
video {
  max-width: 100%;
}
{% endhighlight %}

に隠された問題点を指摘できるだろうか？

- ブラウザによって縮小された画像のクオリティ
- 大きなサイズの画像であることには変わらない = 帯域の無駄

この問題点に対して、多くの解決が提案され続けている。  
多くの提案については、[Responsive IMGs Part 2 — In-depth Look at Techniques « Cloud Four](http://www.cloudfour.com/responsive-imgs-part-2/)(英語)にてその手法と問題点についてよくまとまっているので目を通しておくことをおすすめする。  

この記事からさらにまとめると

- [Adaptive Images in HTML](http://adaptive-images.com/)

JavaScript + PHP
+ .htaccessを利用したほぼサーバーサイドで解決できるこの手法は、画像が常に同じファイル名であるためにCDNを利用している場合に問題が出る可能性があるがインフラチームと連携すれば実装面と効果面でROIが高いと言える解決。

- [Testing Responsive Images](http://www.monoliitti.com/images/)

JavaScriptのみで解決する方法がこちら

{% highlight html %}
<noscript data-large='Koala.jpg' data-small='Koala-small.jpg' data-alt='Koala'><img src='Koala.jpg' alt='Koala'></noscript>
{% endhighlight %}

まずは画像を``noscript``タグで囲んで、

{% highlight js %}
$('noscript[data-large][data-small]').each(function(){
  var src = screen.width >= 500 ? $(this).data('large') : $(this).data('small');
  $('<img src="' + src + '" alt="' + $(this).data('alt') + '" />').insertAfter($(this));
});
{% endhighlight %}

とjQueryでスクリーンサイズに合わせて別画像を呼び出す。  
``noscript``を使うという慣れない実装ながら、CDNでも問題を起こさないし、大小の画像を両方にリクエストを投げる事もない。リクエストの回数と画像のダウンロードにかかる帯域を節約できる見た目以上にエレガントな解決方法。

- [How to use src.sencha.io](http://www.sencha.com/learn/how-to-use-src-sencha-io/)

tinySrcというサービスがSenchaに吸収され、src.sencha.ioとして生まれ変わった解決法。  
こちらは画像をsrc.sencha.ioに投げるとデバイスに最適化したサイズに変換して戻してくれる。  
Senchaのインフラに頼り切ることにはなるが、個人サイトレベルであれば問題ないだろう。  

と3つほどが解決の候補にあげられる。  
サイトの規模やサーバーサイドチームと相談の上、環境に応じた解決を適切に選択してほしい。

### レスポンシブ広告

ウェブサイトには画像や動画など以外にも固定幅の要素がある。  
それが広告。ほとんどのウェブデザイナは広告表示にまつわる仕事をしたことがあるだろう。  
ウェブサイトの収入は多くの場合この広告に頼っている現状を考えると、レスポンシブウェブデザインを加速するにはこの問題を解決しないわけにはいかない。

- [Responsive Advertising via Mark Boulton](http://www.markboulton.co.uk/journal/comments/responsive-advertising)

Mark BoultonがBoston
Globeのレスポンシブウェブデザイン対応から得た経験から、問題の解決作を提案している。

- [Responsive Advertising via ART=WORKR](http://artequalswork.com/posts/responsive-ads.php)

そのMark Boultonの提案への改善策を提案しているのがこちら。

どちらの解決作も

1. 広告は標準化された固定サイズである
2. 広告はサイズと掲載位置をベースに制作され販売される
3. 広告にはpop-over、動画などリッチアドという広告もある

という3点にフォーカスして問題の解決を図ろうとしている。  
結論からいって、3.への解決はどちらも苦慮中で、1.は標準サイズのクリエイティブを再利用して解決できるとしている。  

問題は2.の掲載位置。現状ではセールスチームの人間がお客さんにこのサイトのこの位置に掲載されます、と言って販売してくるわけだから、往々にして掲載位置を固定するためにテンプレートが存在することになる。  
つまり

テンプレート &gt; 掲載位置とサイズ &gt; 広告

というメンタルモデルとなるというのがMark
Boltonの考えで、彼の提案は掲載位置とそれに伴うサイズでの販売ではなく、それらをパッケージ化して販売し、スクリーンサイズに合わせて表示する広告サイズを変化させるというもの。  
全サイズでのインプレッション数をパッケージとして保証すれば問題は解決されるということだ。

それに対して、ART=WORKの提案は

**レンジ** &gt; テンプレート &gt; 掲載位置とサイズ > 広告

というように先ほどのメンタルモデルに**レンジ**という上位の概念を取り入れたもの。  
ここでいうレンジについては、実際に画像を見てもらった方がわかりやすい。([レンジについて](http://artequalswork.com/uploads/responsive-templates.jpg))

ウィンドウサイズをレンジで区切ってそのレンジに合わせてこれまで通りに広告を販売できる。  
モバイルデバイス用に広告を表示させる場合は、そのレンジで購入すればいいという単純な仕組み。  

私の経験では現状日本では、PC用、モバイル用というレンジに近い概念で広告は販売されている。少なくとも私の会社ではそうだ。  
これは日本ではそもそもスマートフォン以前の携帯端末への広告販売に適応してきた歴史があるからだ。  
携帯用、PC用、両方でという販売形態はすでに販売側にも実装側にも制作側にも経験がある。  
この分野に置いては日本が海外を先行していると言えるので、経験を海外に向けて発表でいるいい機会と言える。

## 参考リンク {#links}

- [Mobile-First Responsive Web Design (Brad Frost Web)](http://bradfrostweb.com/blog/web/mobile-first-responsive-web-design/)
- [It’s Not Responsive Web Building, It’s Responsive Web Design (FINCH)](http://www.getfinch.com/finch/entry/its-not-responsive-web-building-its-responsive-web-design/)
- [An Event Apart: The Responsive Designer’s Workflow (LukeW)](http://www.lukew.com/ff/entry.asp?1314)
- [Responsive Design: Beyond the Blog (Boagworld)](http://boagworld.com/dev/complex_responsive_design/)
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

## 参考図書 {#books}

- [Adaptive Web Design: Crafting Rich Experiences with Progressive Enhancement — Easy Readers](http://easy-readers.net/books/adaptive-web-design/)
- [A Book Apart, Mobile First](http://www.abookapart.com/products/mobile-first)
- [A Book Apart, Responsive Web Design](http://www.abookapart.com/products/responsive-web-design)
