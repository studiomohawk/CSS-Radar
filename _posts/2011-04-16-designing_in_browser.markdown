---
layout: post
category: webdesign
title: ブラウザでデザインをするということ
date: 2011-04-16 10:53:05
---

長い間、Adobe
Photoshopはウェブデザインのデファクトアプリとして君臨してきた。もちろん、今も私のMac
MiniにCS4がインストールされている。

しかし、個人プロジェクトはもちろん、すでに会社のプロジェクトでも私はPhotoshopを卒業しつつある。  
Firefox
+ Firebugとお気に入りのエディタ(Vim)。そしてCSS3があれば、Photoshopを使わなくてもデザインができる。

[Hardboiled Web Design](http://www.amazon.com/gp/product/1907828001/ref=as_li_ss_tl?ie=UTF8&tag=studiomohawk-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=1907828001)の作者であるAndy Clarkeは[I don’t care about Responsive Web Design](http://stuffandnonsense.co.uk/blog/about/i_dont_care_about_responsive_web_design/)にて、

> Today, anything that’s fixed and unresponsive isn’t web design, it’s something else. If you don’t embrace the inherent fluidity of the web, you’re not a web designer, you’re something else.
> Web design **is** responsive design, Responsive Web Design **is** web design, done right.

とすら書いているが、[レスポンシブウェブデザイン](http://css.studiomohawk.com/css/2011/01/24/about-responsive-web-design/)はPhotoshopで作ることはとても難しい。レスポンシブデザインこそが、紙的な発想から離れることができなかったウェブデザインの新しい時代の旗手。

ブラウザでデザインをするということ。  
その際の実際のプロセスと便利なツール、そして注意点について紹介しよう。

## インブラウザ デザインのプロセス

### アイデアの集約と大まかなレイアウトの決定

[ワイヤフレーム](http://css.studiomohawk.com/webdesign/2011/04/01/wireframe/)は、ブラウザでデザインを行う際には確実に必要なプロセス。  
Photoshopでのデザインであれば、ワイヤフレームの有効性はPhotoshopの習熟度によっては低くなることもあるかもしれないが、今回はそうはいかない。  
ワイヤフレームだって、スタティックな画像じゃないか、と思うかも知れないし、それは事実だ。  

それでも、以前書いたように、ワイヤフレームはアイデアを形にする最初のステップであり、要素がどこにどんな風に配置されるのかを集約し、レイアウトするのにはぴったりのツールだ。

#### このステップで利用するツール

- [Balsamiq](http://balsamiq.com/)

### ベースになるHTMLとCSSの作成

このステップは基礎になるHTMLを作っていく。CSSリセットや、ベースのCSS、そしてヘッダやフッタ、ボディになる部分を作成する。

自分でよく使うテンプレートを持っておくことで大幅に時間を短縮できる部分だ。  
私は[HTML5 Boilerplate](http://css.studiomohawk.com/tool/2011/03/15/html5boilerplate/)に、グリッドや[OOCSS](https://github.com/stubbornella/oocss)のモジュールを組み込むカスタマイズを施し、よく利用するCSSのスタイルを[LESS](http://css.studiomohawk.com/css/2011/04/03/use_less_to_clean_up_your_css/)のミックスインとして用意している。

#### このステップで利用するツール

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [OOCSS](https://github.com/stubbornella/oocss)
- [LESS](http://lesscss.org/)

### レイアウト

まずはグリッドを決めてしまう。  
Photoshopでのステップだと、グリッドを使ったり、ガイドを使ったりするのがこのステップ。
この時点でグリッドがレスポンシブデザインに対応しているとあとで楽に作業ができる。  
もちろん、慣れないうちは大変だし、リデザインの場合はそうもいかないこともあるだろう。

[Griddle.it](http://griddle.it/)を使って簡単にCSSでガイドを作成する方法を紹介しよう。

Griddle.itは

{% highlight html %}
http://griddle.it/[全体幅]-[コラム数]-[ガターサイズ]
{% endhighlight %}

という指定で、グリッド画像を生成してくれる。
例えば、こちらを開いてみてほしい。[幅960px 12コラム 30pxのガター](http://griddle.it/960-12-30)

自動で画像を生成してくれるので、グリッドパターンが確定したら、

{% highlight css %}
body {
  background: url(http://griddle.it/960-12-30) repeat-y center top;
}
{% endhighlight %}

背景画像に読み込んでしまえばOK。

レスポンシブデザインに対応したいという方は、私のおすすめフレームワーク[Less
Framework](http://lessframework.com/)を利用して、ベース(グリッドの部分だけ利用するのがおすすめ)のCSSを作成し、Less Frameworkに対応した実際にグリッドがウィンドウのサイズに合わせて変更されるこの[JavaScript](http://arnaumarch.com/en/less-grid.html)を組み込むと楽にできる。

すでに自分のレスポンシブデザインのベースがあるという場合は、Griddle.itを利用して、media
queriesで呼び出す画像を切り替えればOK。

また、HTML5 Boilerplateをベースに選択していて、Less
Frameworkなどを組み込むのが面倒な場合は、Andy Clerkeの[320 and up](http://stuffandnonsense.co.uk/projects/320andup/)を利用するといいだろう。(モバイルファーストという概念で作られているので、若干注意が必要)

さらに、レスポンシブウェブデザインでは現在のウィンドウの幅がどのサイズにあたるのかわかりづらいとちょっと面倒なので、
[Window Size bookmarklet to test/debug CSS3 Media Queries](http://www.josscrowcroft.com/2011/code/window-size-bookmarklet/)のブックマークレットを利用すれば、ウィンドウサイズを知らせてくれるので、非常に便利。

ちなみに、この後のステップでは、CSSやHTMLを保存し、ブラウザをリフレッシュして変更を確認し〜を繰り返す。
より時短を目指すため、[Live.js](http://livejs.com/)を活用することをおすすめする。  
このJavaScriptは、ファイルの保存を検知して、ブラウザのリロードを行わず、変更を反映するという夢のようなツール。  
ブラウザでデザインしていなくて、コーディングしている時にかなり役に立つ強力なJavaScript。

#### このステップで利用するツール

- [Griddle.it](http://griddle.it/)
- [Window Size bookmarklet to test/debug CSS3 Media Queries](http://www.josscrowcroft.com/2011/code/window-size-bookmarklet/)
- [Live.js](http://livejs.com/)
- [Less Framework](http://lessframework.com/) + [Less Grid](http://arnaumarch.com/en/less-grid.html) (Less Framework利用時)
- [320 and up](http://stuffandnonsense.co.uk/projects/320andup/) (HTML5
  Boilerplate利用時)

### 残りのステップは、デザインしていくだけ。

コンテンツなしにデザインすることができないのは、Photoshopであろうと、ブラウザでのデザインでも同じ。
だが、画像素材や原稿がまだの場合は、想定している画像のサイズや原稿の分量などを伝えるというステップもあってもいいかも知れない。
(実際に私の職場では非常によくある)

フレキシビリティこそが、ブラウザでデザインすることのもっとも優れた点なので、活用していこう。

ダミー画像の生成なら、[lorempixum](http://lorempixum.com/)が数あるダミー生成ツールのなかでももっとも優れている。  
グレーを始めとする単色だけでなく、サイズの指定はもちろん、色の指定、画像のジャンルの指定すらできる優れものだ。

プロトタイプとして、素材の提供者にブラウザで確認してもらうには十分こと足りるだろう。  
日本語では、海外のようなLorem Ipsumテキストがないので、どうしてもダミー原稿が欲しい場合は、私は[ダミーテキストジェネレータ](http://webtools.dounokouno.com/dummytext/index.html)を利用している。

## インブラウザ デザインの注意点

CSS3はIE6-8では使えないプロパティもある。**全てをブラウザでデザインすることは不可能だ**。  
テキスチャやCSS3では表現しづらいデザインももちろんある。  
**Photoshopを絶対に使ってはならない**ということではない。  
ブラウザでデザインすることはPhotoshopでページすべてのデザインを行うよりもフレキシブルだということ、そして、現時点でそれを行うことが以前に比べれば格段に簡単になったことが大切な部分だと思ってほしい。

Photoshopでページすべてのデザインをしていると、カラースキームを変更するのは大変。  
Photoshopでページすべてのデザインをしていると、フォントを変更するのは大変。  
Photoshopでページすべてのデザインをしていると、要素の配置1つを動かしても大変。  
レイヤーの管理は崩壊し、ちょっとした変更の依頼もストレスになる。  
もちろん、先に書いたレスポンシブウェブデザインの実現も相当な時間がかかる。

インブラウザ デザインではこういった部分でPhotoshopより優れている。  
Photoshopがインブラウザ デザインより優れている部分ももちろんある。  
(私にとっては十分だが)[Pixelmator](http://www.pixelmator.com/)も、レイヤースタイルに対応した[Acorn](http://flyingmeat.com/acorn/)もPhotoshopがデファクトになってきた強力な機能やユーザビリティにはまだ少し距離がある。  
ここで最も大切なことは、Photoshopでのデザインプロセスにも疑問を投げかける時代が来たということ。

よりプロダクティブになることが、ウェブデザイナのタスクの1つで、そうすることで、より優れた問題解決を提案できる、作ることそのものより、どうやって問題を解決するべきか、を考える時間を作り出していくことが大切なこと。

ブラウザでデザインすること。  
このプロセス、ツールセットにバージョンをつけるとしたら、1.0RCといったところだろう。  
CS5.5になるほど、イテレーションを繰り返しすばらしいプロダクトを提供してきたAdobe
Photoshopと比べればまだまだ始まったばかり。  
このプロセス/ツールセットのバージョンアップを行うのは、ウェブデザイナたちの役割だ。

## ブラウザでのデザインについてもっと詳しく

- [Why we skip Photoshop (37signals)](http://37signals.com/svn/posts/1061-why-we-skip-photoshop)
- [Graphics Editor or Text Editor? (The Hickensian)](http://www.hicksdesign.co.uk/journal/graphics-editor-or-text-editor)
- [Walls Come Tumbling Down presentation slides and transcript (Stuff and Nonsense)](http://www.stuffandnonsense.co.uk/blog/about/walls_come_tumbling_down_presentation_slides_and_transcript/)
- [Make Your Mockup in Markup (24 ways)](http://24ways.org/2009/make-your-mockup-in-markup)
- [Why I never design a site in Photoshop (Bullies Get High On Beatings)](http://christeso.com/why-i-never-design-a-site-in-photoshop)
- [Life Without Photoshop by Joel Lewenstein (Quora)](http://www.quora.com/Joel-Lewenstein/Life-Without-Photoshop)
- [Learn to Use Your Browser in Web Design (Inspired Magazine)](http://www.inspiredm.com/learn-to-use-your-browser-in-web-design/)
