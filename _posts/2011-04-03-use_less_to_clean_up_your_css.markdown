---
layout: post
title: LESS - CSSプリプロセッサ
category: less
date: 2011-04-03 12:51:36
update: 2012-01-18T10:57:14+09:00
tldr: "LESSやSASSのようなメタ言語はCSSの開発を劇的に変えることができるツール。ここではそのうちLESSについて。ツールに振り回されるのではなくツールを使いこなすために知っておきたいことを紹介しよう。"
---

## 時短、効率、スピードアップのためのはじめてのLESS入門 @ SwapSkills

[![SwapSkills2012(25)時短、効率、スピードアップのためのはじめての LESS 入門](http://swapskills.info/banner/25.png){:class='right'}](http://swapskills.info/month/25.html)

[SwapSkills](http://swapskills.info/month/25.html)にてLESSについての勉強会にて2012年2月18日（土）13:30 ～ 私が登壇することになりました。  
この勉強会ではLESSをこれまで使ったことがない人に向けてLESSの導入の利点、欠点など(このパートはGoogleの小久保 浩大郎さんが担当します)を説明し、私は後半のLESSの文法についての担当になります。  
この勉強会をきっかけに[LESS](http://lesscss.org/)のページを丸ごと[日本語訳](http://less-ja.studiomohawk.com/)したりして改めて勉強しなおしました。  
LESSについて勉強しなきゃな、と思っている方はぜひこの機会にどうぞ!

## CSSプリプロフェッサとは {#whatis}

If it ain't broken, don't fix it.

壊れてないなら、直す必要はない。  
CSSは追加してほしい仕様はあるけど、壊れている、とまでは感じない。プログラミングの何たるかをまったく理解していなかった私にも覚えられた。  

LESSやSASSに代表されるCSSプリプロセッサは、CSSにはないプログラミング言語的な機能を追加してくれるツール。  
絶対に必要かというとそうでもないが、使いこなすとよりシンプルに、パワフルなスタイルシートを実現することができる。  
実際に私もこのブログを始め様々な個人のプロジェクトではLESSを使い始めている。

私がSASSよりLESSを選んだのは制作者である[cloudhead](http://cloudhead.io/)氏はLESSをCSSとはまったく異なる言語にしないようにかなり気を使っているからだ。  
CSSは宣言型プログラミングの流れを組む言語であり、cloudhead氏はLESSも同じ流れを保ったままで言語を拡張しようとしている。  
CSSを開発する人は必ずしもプログラム言語に詳しいとは限らないからcloudhead氏のアプローチを選択した。  

## LESSでできること {#feature}

LESSでは、**変数**、**ミックスイン**、**入れ子ルール**、**名前空間**、**四則演算と関数**などをCSSに追加することができる。  
プログラミングの経験があるならそれぞれ覚えがあるだろう機能達ばかりでCSSには存在しない機能。

オフィシャルサイトに詳しく利用法については説明があるので詳細は[こちら](http://lesscss.org/)。  
制作者の了承を得てオフィシャルサイトの日本語化を行ったので英語が苦手な方は[こちら](http://less-ja.studiomohawk.com/)。  

ここではLESSの基本機能とそのシンタックスについて紹介していこう。  

- **変数**

{% highlight text %}
@color: #4D926F;
#header {
  color: @color;
}
h2 {
  color: @color;
}
{% endhighlight %}

というLESSは、

{% highlight text %}
#header {
  color: #4D926F;
}
h2 {
  color: #4D926F;
}
{% endhighlight %}

のように解釈される。

**@+変数名**

で定義できる。正確には変数というよりは定数に近い使われ方をしている。  

{% highlight text %}
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}

#footer {
  color: @var; // red  
}

{% endhighlight %}

ただしプログラミング言語と同じくスコープがあり上記のようにローカルに定義がない場合は、親ルールから定義を探しそれでもなければグローバルを探すように作られている。  
このスコープに関しては変数だけではなくミックスインの定義についても同様に扱われる。

- **ミックスイン**

こちらも実際にどのようにLESSで記述し実際にCSSでどのように解釈されるのかを見た方が早いだろう。

{% highlight text %}
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
{% endhighlight %}

というLESSで定義したミックスインを

{% highlight text %}
#menu a {
  color: #111;
  .bordered;
}
{% endhighlight %}

にしてルールセットの中に追加すると、

{% highlight text %}
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
{% endhighlight %}

CSSではこのように解釈される。  

CSS3を利用する場合、まだまだ多くのベンダープリフィックスを追加しなければいけないのが現実。  
そんな際にこのミックスインは威力を発揮する。  
ミックスインはパラメータを渡したりデフォルトを定義することもできるので、使い回しが効く機能でもある。  
詳しい説明は[こちら](http://studiomohawk.github.com/ja-lesscss-org/#-ミックスインの引数利用)から。

- **入れ子ルール**

ルールセットを入れ子にすることで通常であればなんども繰り返し書かなければならないセレクタを省略できるのが入れ子ルール。  

{% highlight text %}
#header { color: black; }
#header .navigation {
  font-size: 12px;
}
#header .logo { 
  width: 300px; 
}
#header .logo:hover {
  text-decoration: none;
}
{% endhighlight %}

という**CSS**は、LESSでは

{% highlight text %}
#header        { color: black;
  .navigation  { font-size: 12px }
  .logo        { width: 300px;
    &:hover    { text-decoration: none }
  }
}
{% endhighlight %}

というように記述することができる。  
何度もセレクタを書かずに済むだけではなくDOMの構造とほぼ同じ構造になるし、なによりこのように記述することを覚えるとキレイにセレクタを整理する癖がつく。  
なお、**&:hover**という記述があるがこちらは疑似クラス(:link、:visited、:hover、:focusなど)を追加するのに活躍する。  
**&**という結合子は、入れ子になったセレクタを子孫として扱わず親セレクタに追加することができる。  
なので疑似クラスだけではなく、

{% highlight text %}
.float.left {...}
{% endhighlight %}

というようなマルチクラスの記述にも対応できる。

- **名前空間**

こちらは変数やミックスインをまとめる際に活用できる機能。

{% highlight text %}
#bundle {
  .button () {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover { background-color: white }
  }
{% endhighlight %}

**#bundle**という名前空間の中に**.button**というミックスインを定義する。

{% highlight text %}
#header a {
  color: orange;
  #bundle > .button;
}
{% endhighlight %}

このようにして呼び出すことが可能。  
例では**#bundle**とIDをバンドル化しているが、実際にはクラス名でも要素名でもバンドル化は可能。  
つまりスタイルシート内にあるすべてのミックスインは名前空間を持つことができる。

- **四則演算と関数**

まずは演算から見ていこう。

{% highlight text %}
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

color: #888 / 4;
background-color: @base-color + #111;
height: 100% / 2 + @filler;
{% endhighlight %}

計算機がデスクの上におかれていたりしないだろうか？ 私はおいてある。  
ウェブデザイナには計算機を手放せない人も多いことだろう。  
その必要をなくしてくれるのが演算。その名前の通り、足し算、引き算、かけ算、割り算を行うことができる。

ただの計算機とは違い色の演算もすることができる。  
しかし**#888 / 4**の答えは予想できても、**#c28381 * #fafafa**はどんな色になるのかわからない。  
よりわかりやすく色を操作するためにあるのが**関数**だ。

{% highlight text %}

lighten(@color, 10%);     // @colorより10%明度が*高い*値を返します
darken(@color, 10%);      // @colorより10%明度が*低い*値を返します

saturate(@color, 10%);    // @colorに10%の彩度を*追加*した値を返します
desaturate(@color, 10%);  // @colorから10%の彩度を*削減*した値を返します

fadein(@color, 10%);      // @colorから10%透明度が*高い*値を返します
fadeout(@color, 10%);     // @colorから10%透明度が*低い*値を返します
fade(@color, 50%);        // @colorの50%の透明度を持つ値を返します

spin(@color, 10);         // @colorから10度色相が大きい値を返します
spin(@color, -10);        // @colorから10度色相が小さい値を返します

mix(@color1, @color2);    // @color1 と @color2 をミックスした値を返します
{% endhighlight %}

変数と演算、そして色の関数の組み合わせはスタイルシートにより明確な意味を持たせることもできる。  
15pxや#fefefeは作った本人以外、もしかすると作った本人ですら2週間も経てばその意味を忘れてしまうだろう。  
しかし以下の例を見てほしい、

{% highlight text %}
@base-color: #fefefe;
@accent-color: #f99157;
@subtle-accent: lighten(@accent-color:, 20%);
@dark-accent: darken(@accent-color:, 20%);
@base-font-size: 16px;
@base-height: @base-font-size * 1.618;
{% endhighlight %}

このようにデザインの基礎になる部分を変数化して、演算や色の関数を使ってバリエーションを作るということもできる。  
データに名前を付けるのが変数の本当の実力でそれぞれに名前がついていれば16pxが大事な値であるかも一目瞭然にすることもできる。

## 便利なミックスインのコレクション {#mixin}

自分がよく利用するルールのミックスインを定義しておけば飛躍的にCSSの開発はスピードアップする。  
フロントエンドデベロッパやウェブデザイナはいつだって時間が足りない職種なので自分なりのコレクションを作っておくといいだろう。

- [Preboot.less](http://markdotto.com/bootstrap/)

TwitterのBoostrapでも利用しているミックスイン/変数コレクションの先駆者

- [LESS by Stuff & Nonsense](http://www.stuffandnonsense.co.uk/blog/about/less)

Andy Clarkeも記事中に非常に便利なミックスインを紹介している。

{% highlight text %}
.font-size(@font-size: 16) {
	@rem: (@font-size / 10);
	font-size: @font-size * 1px;
	font-size: ~"@rem";
}
// pixelをremに変換しつつ、remが使えない場合のフォールバックを入れる

h1 { .font-size(32); }

// CSS
// h1 {
//    font-size:32px;
//    font-size:3.2rem;
// }
{% endhighlight %}

また、以下のカラースキーム生成もCSSなら大変だがLESSならより自由度が高く使い回しができて便利。

{% highlight text %}
@col : #468DB6;			// Base colour
@comp : spin(@col, 180);  	// Complementary colour

@Col_l1 : lighten(@col, 5%);	// Lighten base
@Col_l2 : lighten(@col, 10%);
@Col_l3 : lighten(@col, 15%);
@Col_l4 : lighten(@col, 20%);

@Col_d1 : darken(@col, 5%);	// Darken base
@Col_d2 : darken(@col, 10%);
@Col_d3 : darken(@col, 15%);
@Col_d4 : darken(@col, 20%);

@Comp_l1 : lighten(@comp, 5%);	// Lighten complementary
@Comp_l2 : lighten(@comp, 10%);
@Comp_l3 : lighten(@comp, 15%);
@Comp_l4 : lighten(@comp, 20%);

@Comp_d1 : darken(@comp, 5%);	// Darken complementary
@Comp_d2 : darken(@comp, 10%);
@Comp_d3 : darken(@comp, 15%);
@Comp_d4 : darken(@comp, 20%);
{% endhighlight %}

加えて、彼のモバイルファーストアプローチのBoilerplateである[320 and Up](https://github.com/malarkey/320andup/)に他のミックスインがあるので参考に。

- [LESS Elements](http://lesselements.com/) 

Preboot.lessと重複する部分も多いけれどぜひチェックしておいてほしい。

大事なことは自分で自分が使いやすいミックスイン/変数コレクションを作ること。  
二度使えないコードを書かないことは大切なこと。何度も使えるコードを何度も書かないことも同じくらい大事。  
D.R.Y(Don't Repeat
Yourself)はプログラミングにおける基本的なプリンシパルの1つだが、CSSではなかなか難しいのでLESSでそれを補完できるのは非常に心強い。

## 使い方 {#usage}

ここまで来てようやく使い方の説明になるが、

{% highlight html %}
<link rel="stylesheet/less" type="text/css" href="styles.less">
<script src="less.js" type="text/javascript"></script>
{% endhighlight %}

と使い方はとても簡単。  
注意してほしいのは、**rel="stylesheet/less"**の部分だけ。

さらにLESS.jsを実際に呼び出している場合は、``#!watch``という文字列をURLの後ろにつけると、LESSファイルの保存に合わせてスタイルをしてくれる。  
なお、ローカルファイルではChromeで動作しないかも知れないので、そんな場合はChromeに``-allow-file-access-from-files``のパラメータを渡して起動すれば動作する。  
毎回毎回リフレッシュするのは面倒な上、意外と時間の無駄なので開発中はぜひ利用してほしい。

## CSSへのコンパイル {#compile}

node.jsで動作するサイトでない限りはLESSの記述はCSSに展開する必要があるだろう。

node.jsを使ったサーバサイドでのコンパイル以外ではLESSファイルをCSSへコンパイルするには大きく2つの方法がある。

1. GUIツール
2. コマンドライン

GUIツールから紹介しよう。
GUIツールは大体同じ動作で、.lessファイルがあるディレクトリをツール上で指定すると自動でコンパイルしてくれる。  
おそらく全部のツールで.lessファイルを保存するたびにCSSに自動でコンパイルされるので実際に呼び出すファイルはCSSで問題ない。  
詳しい使い方はツールのヘルプを参照。

- [WinLess - Windows GUI for less.js](http://winless.org/online-less-compiler) / Windowsのネイティブアプリで無料
- [SimpLESS - Your LESS CSS Compiler](http://wearekiss.com/simpless) / Win、Linux、Macで動作するAdobe Airアプリ。無料
- [Crunch! - The tastiest LESS editor](http://crunchapp.net/) / Win、Linux、Macで動作するAdobe Airアプリ。無料
- [LESS.app For Mac OS X](http://incident57.com/less/) / Macのネイティブアプリ、無料

他にも幾つかGUIツールはあるが無料のツールは知る限りこの4つ。  

LESS.appを作成したBryan
Jones氏は[CodeKit](http://incident57.com/codekit/)という新しいアプリを作成していてベータ版の間は無料。LESSをCSSに変換するだけでなく、SASSやStylusにも対応し、HAML、Coffee
Script、画像の最適化など様々な機能が満載の夢のようなアプリ。Macのみ。

また同じくMacのみになってしまうが、[LiveReload](http://livereload.com/?t=1320397070)というアプリもLESS、SASS、Coffee Scriptを保存と同時にブラウザをアップデートしながら変換してくれる。

コマンドラインでの利用にはもちろんNode.jsが必要。  
Mac、Windowsともに[node.js](http://nodejs.org/)からパッケージがダウンロードできるので、あとはダブルクリックするだけ。簡単。

インストールが終わったらターミナルアプリから

{% highlight sh %}
lessc styles.less > styles.css
{% endhighlight %}

とすればいいだけ。

{% highlight sh %}
lessc -x　styles.less > styles.css
{% endhighlight %}

のように、**-x**オプションをつけると圧縮したCSSとして展開される。  

## 参考リンク {#link}

- [LESS](http://lesscss.org/)
- [LESS by Stuff & Nonsense](http://www.stuffandnonsense.co.uk/blog/about/less)
- [Preboot.less](http://markdotto.com/bootstrap/)
- [LESS Elements](http://lesselements.com/)
- [Less.js Will Obsolete CSS](http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/)
- [SASS](http://sass-lang.com/)

<script src="/js/hiless.js"></script>
