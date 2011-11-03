---
layout: post
title: LESS - CSSプリプロフェッサ
category: css
date: 2011-04-03 12:51:36
toc:
- {text: LESSとは, hash: whatis}
- {text: LESSでできること, hash: feature}
- {text: 便利なミックスインのコレクション, hash: mixin}
- {text: 使い方, hash: usage}
- {text: CSSへのコンパイル, hash: compile}
- {text: 参考リンク, hash:link}
---

## LESSとは {#whatis}

If it ain't broken, don't fix it.

壊れてないなら、直す必要はない。  
CSSは追加してほしい仕様はあるけど、壊れている、とまでは感じない。プログラミングの何たるかをまったく理解していなかった私にも簡単に覚えられた。  

[SASS](http://sass-lang.com/)や[LESS](http://lesscss.org/)のようなCSSの拡張が完全に悪だとは思わないが、絶対に必要だとも感じない。  
でも、知っておくともっとシンプルに、もっとパワフルに、もっと素早くCSSを書くことができる、プラスアルファの便利ツールであることは間違いない。  

実際このブログでも、ほかの幾つかの個人プロジェクトでは私はLESSを使い始めている。  
SASSもLESSもほぼ同じ概念で、ほぼ同じ文法で書かれているが、LESSはJSを使ってダイナミックにCSSへ変換してくれたりもでき、すこしだけ開発時に楽をできるので私はLESSを選んだ。  
もちろん、今話題の[Node.js](http://nodejs.org/)でも利用できるという点もはやり好きモノの私にはぴったりだ。  
ちなみに、SASSでも

{% highlight sh %}
sass --watch style.scss:style.css
{% endhighlight %}

とコマンドラインから実行すれば、SASSファイルを保存するたびにCSSへ変換してくれるそうだから、自分の好みに合わせて利用してほしい。  

## LESSでできること {#feature}

LESSでは、**変数**、**ミックスイン**、**入れ子ルール**、**名前空間**、**四則演算と関数**などをCSSに追加することができる。  
プログラミングの経験があるなら、それぞれ覚えがあるだろう機能達ばかりで、CSSには存在しない機能。

オフィシャルサイトに詳しく利用法については説明があるので、詳細は[こちら](http://lesscss.org/)を確認してほしい。  
もちろん英語なので、日本語訳が必要な場合はメールか[Twitter@cssradar](http://twitter.com/#!/cssradar)でリクエストを。

- **変数**

{% highlight css %}
@color: #4D926F;
#header {
  color: @color;
}
h2 {
  color: @color;
}
{% endhighlight %}

というLESSは、

{% highlight css %}
#header {
  color: #4D926F;
}
h2 {
  color: #4D926F;
}
{% endhighlight %}

のように解釈される。

**@+変数名**

で定義できる。正確には変数というよりは、定数に近い使われ方をしている。  

{% highlight css %}
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

ただし、プログラミング言語と同じくスコープがあり、上記のようにローカルに定義がない場合は、親ルールから定義を探し、それでもなければグローバルを探すように作られている。  
このスコープに関しては変数だけではなく、ミックスインの定義についても同様に扱われる。

- **ミックスイン**

  こちらも実際にどのようにLESSで記述し、実際にCSSでどのように解釈されるのかを見た方が早いだろう。

{% highlight css %}
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
{% endhighlight %}

というLESSで定義したミックスインを

{% highlight css %}
#menu a {
  color: #111;
  .bordered;
}
{% endhighlight %}

にしてルールセットの中に追加すると、

{% highlight css %}
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
{% endhighlight %}

CSSではこのように解釈される。  

CSS3を利用する場合、まだまだ多くのベンダープリフィックスを追加しなければいけないのが現実。  
そんな際にこのミックスインは威力を発揮する。  
ミックスインはパラメータを渡したり、デフォルトを定義することもできるので、使い回しが効く機能でもある。  
詳しい説明は、[こちら](http://lesscss.org/#-parametric-mixins)から。

- **入れ子ルール**

  変数やミックスインももちろん強力な追加機能ではあるが、私の一番のお気に入りがこの入れ子ルール。  

{% highlight css %}
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

{% highlight css %}
#header        { color: black;
  .navigation  { font-size: 12px }
  .logo        { width: 300px;
    &:hover    { text-decoration: none }
  }
}
{% endhighlight %}

というように記述することができる。  
何度もセレクタを書かずに済むだけではなく、DOMの構造とほぼ同じ構造になるし、なにより、このように記述することを覚えるとキレイにセレクタを整理する癖がつく。  
なお、**&:hover**という記述があるが、こちらは疑似クラス(:link、:visited、:hover、:focusなど)を追加するのに活躍する。  
**&**という結合子は、入れ子になったセレクタを子孫として扱わず、親セレクタに追加することができる。  
なので、疑似クラスだけではなく、

{% highlight css %}
.float.left {...}
{% endhighlight %}

というようなマルチクラスの記述にも対応できる。

- **名前空間**

　こちらは変数やミックスインをまとめる際に活用できる機能。

{% highlight css %}
#bundle {
  .button () {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover { background-color: white }
  }
{% endhighlight %}

**#bundle**という名前空間の中に**.button**というミックスインを定義する。

{% highlight css %}
#header a {
  color: orange;
  #bundle > .button;
}
{% endhighlight %}

このようにして呼び出すことが可能。

- **四則演算と関数**

  こちらは使ったことがまだないので、[オフィシャルサイトで例](http://lesscss.org/#-color-functions)を見てほしい。

## 便利なミックスインのコレクション {#mixin}

自分がよく利用するルールのミックスインを定義しておけば、飛躍的にCSSの開発はスピードアップする。  
フロントエンドデベロッパやウェブデザイナはいつだって時間が足りない職種なので、自分なりのコレクションを作って、[Gist](https://gist.github.com/)などに置いておくと便利だ。

- [Bootstrap.less](http://markdotto.com/bootstrap/)
- [LESS Elements](http://lesselements.com/)

すでに便利なミックスインを公開している人もいるので、それらから自分の派生を作るほうが早いかも知れないので、ソースを見てみるといいだろう。

## 使い方 {#usage}

ここまで来てようやく使い方の説明になるが、

{% highlight html %}
<link rel="stylesheet/less" type="text/css" href="styles.less">
<script src="less.js" type="text/javascript"></script>
{% endhighlight %}

と使い方はとても簡単。  
注意してほしいのは、**rel="stylesheet/less"**の部分だけだ。

ちなみにGoogle Codeにレポジトリを持っているので、

{% highlight html %}
<link rel="stylesheet/less" type="text/css" href="/stylesheets/styles.less">
<script src="http://lesscss.googlecode.com/files/less-1.0.41.min.js"></script>
{% endhighlight %}

とすると何もダウンロードせずともLESSを使うことができる。

さらに

{% highlight html %}
<script type="text/javascript" charset="utf-8">
    less.env = "development";
    less.watch();
</script>
{% endhighlight %}

この記述をHTMLに追記しておけばlessファイルが保存されると、CSSがリフレッシュなしに変更が適応される。  
毎回毎回リフレッシュするのは面倒な上、意外と時間の無駄なので、開発中はぜひ利用してほしい。

なお、URLの末尾に**#!watch**としても同じことができるので、開発後に記述を削除するのを忘れそうな人は、こちらをおすすめする。


## CSSへのコンパイル {#compile}

node.jsで動作するサイトでない限りは、LESSの記述はCSSに展開する必要があるだろう。

MacではGUIのアプリで行うこともできるが([LESS.app](http://incident57.com/less/))、WindowsではGUIアプリは見当たらない。おそらくLinuxでも同じだろう。  
SASSではJavaで動作するクロスプラットフォームのUIがある。([Compass.app](http://compass.handlino.com/))

私はnode.jsをコマンドラインから利用してLESSをCSSに展開している。  
node.jsは恐ろしいほどのスピードで開発が進んでいるので、どの環境でも簡単にインストールすることができるようになってきた。

node.jsのインストールについては[こちら](https://github.com/joyent/node/wiki/Installation)を参考に。

Macを利用しているなら、Homebrewから0.40をインストールすることができる。  
また、node.jsにもNPMというパッケージマネージャがあり、こちらでless.jsをインストールすることも簡単にできる。

インストールが終わったら、

{% highlight sh %}
lessc styles.less > styles.css
{% endhighlight %}

とすればいいだけ。

{% highlight sh %}
lessc -x　styles.less > styles.css
{% endhighlight %}

のように、**-x**オプションをつけると圧縮したCSSとして展開される。

## 参考リンク {#link}

- [Bootstrap.less](http://markdotto.com/bootstrap/)
- [LESS Elements](http://lesselements.com/)
- [Less.js Will Obsolete CSS](http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/)
- [LESS](http://lesscss.org/)
- [SASS](http://sass-lang.com/)
