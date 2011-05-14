---
layout: post
category: tool
title: ウェブデザイナのためのRuby入門
date: 2011-05-14 00:03:59
---

CSS
Radarと名がついている割には、CSSの話があまりないなと最近になって気がついたけれど、誰も気にしちゃいないだろう。  
今回はCSSやデザインからはほど遠いように思えるRubyについて。  
前にも書いた気がするが、私は極度の面倒くさがり。とにかく楽をするためなら、どんな苦労もいとわない。
Rubyにチャレンジしている真っ最中ながら、色々な新しい概念に触れ、色々な新しいワザを覚え、少しずつながら、面倒なことを楽にすることもでき始めてきた。
そこで、Rubyを少しだけ使い倒す方法を紹介しようと思い立った。

たまにはPhotoshopを離れて([私はあまり使いませんが](http://css.studiomohawk.com/webdesign/2011/04/16/designing_in_browser/))、新しいことに挑戦してみませんか？

*私はRuby初心者ですので、間違っている記述や、もっと簡単にできるのに、という部分が多々あるでしょう。そんな際は是非メールをください。  
なお、今回の記事はMac OSXでの話で、Windowsについてはまったく触れませんが、基本的な概念は同じです。
{: .small}

## Rubyのインストール {#rubyinstall}

Mac OS
XにはRubyが標準でインストールされている。でも、最新版ではなく、まれに最新版でないと動作しないプログラムもあるので、最新版をインストールしておく必要がある。

MacにおけるRubyの管理は、[RVM - Ruby Version
Manager](https://rvm.beginrescueend.com/)がおすすめ。  
RVMを利用するためには、gitが必須になる。gitのインストールについては、[こちらを参照してほしい](http://css.studiomohawk.com/tool/2011/01/29/git-version-control/)。

**RVMのインストール方法**

ターミナルを開いて、

{% highlight sh %}
sudo bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)
{% endhighlight %}

~/.bash_profile か ~/.bashrcに

{% highlight sh %}
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # This loads RVM into a shell session.
{% endhighlight %}

を追加(上記ファイルがない場合は、作成して追加)  
では、RVMが正しく動作するかを確認しよう。

{% highlight sh %}
type rvm | head -1
{% endhighlight %}

とターミナルで実行してみる

{% highlight sh %}
rvm is a function
{% endhighlight %}

と返事が返ってきたら成功。
成功したら、またターミナルにて

{% highlight sh %}
source ~/.rvm/scripts/rvm
{% endhighlight %}

と実行しておこう。

{% highlight sh %}
rvm install 1.9.2-head
{% endhighlight %}

とすれば、ruby 1.9.2-headのバージョンをインストールできる。  
ちなみに、RVMでインストールできるバージョンは

{% highlight sh %}
rvm list known
{% endhighlight %}

とすればリストが表示されるので、表示されたパッケージを`rvm
install`の後に記述すればそのパッケージをインストールできる。

なお、RVMではバージョンごとにgemのパッケージを管理するため、さっきまで使えたはずのgemがないとエラーが出る、なんて事態に遭遇したら、

{% highlight sh %}
ruby -v
{% endhighlight %}

として現在利用しているrubyのバージョンを確認してみよう。

{% highlight sh %}
rvm --default use 1.9.2 # とすると、1.9.2をデフォルトで利用しはじめ

rvm use system # システムにインストールされているRubyと
rvm default # デフォルト設定したRubyを切り替えることも可能 
{% endhighlight %}

詳しくは[https://rvm.beginrescueend.com/](https://rvm.beginrescueend.com/)(英語)

## Ruby Gem

RubyにはGemと呼ばれるパッケージマネージャがある。1.9系以降からはRubyの標準機能となったそうだ。  
MacではGemも標準でインストールされていたと思うが、記憶が確かではないので確認してほしい。

{% highlight sh %}
sudo gem update --system
{% endhighlight %}

とすると、アップデートできるので試してみてほしい。

パッケージマネージャってなんだ、という点については、Ubuntuを使っていた私にはすんなり理解できたが、そうでもない人が多いのでMacでいうところの、macportやfink、homebrewみたいなライブラリ集積地みたいなものだと覚えておけばいいはず。
*Homebrewについては、[こちらの記事](http://css.studiomohawk.com/tool/2011/02/13/terminal-101/)で紹介したので、参考にしてほしい。

{% highlight sh %}
gem install PACKAGENAME
{% endhighlight %}

として、パッケージをインストールできる。  
例えば、

{% highlight sh %}
gem install rake
{% endhighlight %}

とすると、Ruby版make(ビルドツール)であるrakeをインストールできる。  

## ウェブデザイナにおすすめのパッケージ

### CSS Sprite

CSSスプライトはパフォーマンス向上のためには必須になるテクニックだが、作成するのも、管理するのも、メンテナンスするのもとても面倒。
ある特定のディレクトリに画像を入れて、自動でスプライト画像を作成し、CSSもあわせて作ってくれたら。を叶えるプログラムがRubyにある。

- **[merbjedi / sprite](https://github.com/merbjedi/sprite)**

**インストール**

`rmagick`gemが必要になるので、まずはこのgemをインストール。

{% highlight sh %}
gem install rmagick #私はこのコマンドではエラーになったので、下記を実行してから、再度チャレンジした

# エラーになった場合は
sudo brew install libxml2
sudo brew install ImageMagick
# を実行してから、上記を実行してほしい。なお、homebrewを利用している場合の例
{% endhighlight %}

そしてspriteのgemをインストール

{% highlight sh %}
gem sources -a http://gemcutter.org
gem install sprite
{% endhighlight %}

**使い方**

{% highlight sh %}
public/
  images/
    sprites/
      black-icons/
        stop.png
        go.png
        back.png
        forward.png

      weather/
        sunny.gif
        rainy.gif
        cloudy.gif
{% endhighlight %}

というようなディレクトリ構造を例とすると、
`public`にて

{% highlight sh %}
sprite
{% endhighlight %}

というコマンドを実行すると

{% highlight sh %}
public/
  stylesheets/
    sprites.css
  images/
    sprites/
      black-icons.png
      weather.png
{% endhighlight %}

というファイルを生成する。

{% highlight css %}
.sprites.blue-stars-small {
  background: url('/images/icons/blue-stars/small.png') no-repeat 0px 0px;
  width: 12px;
  height: 6px;
}
.sprites.blue-stars-medium {
  background: url('/images/icons/blue-stars/medium.png') no-repeat 0px 6px;
  width: 30px;
  height: 15px;
}
.sprites.blue-stars-large {
  background: url('/images/icons/blue-stars/large.png') no-repeat 0px 21px;
  width: 60px;
  height: 30px;
}
.sprites.blue-stars-xlarge {
  background: url('/images/icons/blue-stars/xlarge.png') no-repeat 0px 96px;
  width: 100px;
  height: 75px;
}
{% endhighlight %}

というようなスタイルを書き出してくれる。  
sassのmixinも利用できるようで、設定も変更できる。

詳しくは[こちら](https://github.com/merbjedi/sprite)(英語)。

### SASS/LESS

LESSは今ではnode.jsプロジェクトとして生まれ変わったが、最新版ではないものの、gemからインストールはできる。
SASSについては、先日1年ぶりほどのアップデートがありアクティブにRubyプロジェクトとして成長している。

ちなみに、SASSでは[Lemonade](http://www.hagenburger.net/BLOG/Lemonade-CSS-Sprites-for-Sass-Compass.html)というパッケージを利用してCSS Spriteの自動化を行うこともできる。

LESSについての説明は、[LESS: CSSをよりシンプルに、パワフルに](http://css.studiomohawk.com/css/2011/04/03/use_less_to_clean_up_your_css/)を参考にしてほしい。

**インストール**

{% highlight sh %}
gem install less #LESS
gem install sass #SASS
{% endhighlight %}

### Juicer

リクエスト回数を減らすためには、CSS/JSの呼び出しは最小にしておく必要がある。  
が、CSSもJSもメンテナンス性を考えれば、たくさんのファイルになってしまうのが常。  
この矛盾を解決するためのプログラムが[Juicer](http://cjohansen.no/en/ruby/juicer_a_css_and_javascript_packaging_tool)。

Juicerは、YUI
Compressorを利用してCSS/JSを圧縮した上で、CSSであれば@importを使ってファイルを結合してくれ、JSであれば、

{% highlight sh %}
/**
 * @depends prototype.js
 * @depends widgets/lightbox.js
 */
{% endhighlight %}

というコメントを使って、ファイルの結合を行うことが可能。  
CSSはmaster.cssというファイルに@importのみを記述して、JSもmaster.jsというファイルにコメント文だけ記述している。

実行すると、それぞれmaster.min.css、master.min.jsというファイルを書き出してくれる。

使い方はとても簡単。

{% highlight sh %}
juicer merge --force master.css # CSS --forceはmaster.min.cssが存在しても上書きを強制
juicer merge -i --force master.js #JS -iはエラーを無視して圧縮/結合を実行するオプション
{% endhighlight %}

ついでに、

{% highlight css %}
h1 { background: url(/somepath/someimage.png?embed=true); }
/* ?embed=trueを追加する */
{% endhighlight %}

とすると、画像をdata-urlに変換してくれる。

{% highlight sh %}
juicer merge --force master.css --embed-images data_uri
{% endhighlight %}

のように実行すればOK。

**インストール**

{% highlight sh %}
gem install juicer # Juicerをインストール
juicer install yui_compressor # YUI compressorをインストール
juicer install closure_compiler # Google Closure Compilerをインストール
juicer install jslint # JsLintをインストール
{% endhighlight %}

### CSS Redundancy Checker

何年か前にウェブツールとして同名のツールがあり、ある日使えなくなってしまった。
[CSS Redundancy
Checker](http://code.google.com/p/css-redundancy-checker/)は、あるHTML郡で使われていないスタイルルールをリストアップしてくれるという強力なツール。  
フロントエンドデベロッパのタスクのほとんどはIteration、日本語にすると反復することが多く、その反復がよりよいモノを生み出すための最も大事な原動力となる。  
しかしその副産物として、使っていないスタイルルールであふれかえって、何を消したらまずいのかもはやわからない状態になってしまう。  
その問題を解決するのがこのツールというわけだ。

使い方

{% highlight sh %}
ruby css-redundancy-checker.rb [CSSファイル名] [HTMLファイルディレクトリ または URLを一行ずつ記述した.txt]
{% endhighlight %}

とするだけ。CSSを分割して管理している場合は、Juicerで結合してから実行するといいだろう。
もちろんある特定のCSSファイルをチェックしたい場合は、個別に指定すればOK。

**インストール**

{% highlight sh %}
sudo gem install hpricot # hpricotをインストール、必須
svn checkout http://css-redundancy-checker.googlecode.com/svn/trunk/ css-redundancy-checker
# svnをインストールしていない場合は、sudo brew install svnとしてから
{% endhighlight %}

css-redundancy-checker.rbという名前の通り、このスクリプトは単純な1ファイル。  
なので、実行する際はインストールしたディレクトリに移動してから実行する必要がある。

### Rake

Rakeはそれ自体ではなにもしないが、非常に強力なツール。  
ビルドツールとして誕生したRakeのはずだが、私はビルドツールがなんのことかも完璧には理解できない。  
要するに、A)の次はB)を実行し、C)を実行するのは、A)を実行する必要がある。  
というなプロセスをrubyを使って行うことができる。いわばエディタなどにあるマクロみたいな存在。

ここまで紹介してきたツール群はもちろんのこと、Rakeを使って  

- [OptiPNG](http://optipng.sourceforge.net/)を使ってPNG画像の最適化
- [JPEGtran](http://sylvana.net/jpegcrop/jpegtran/)を使ってJPEG画像の最適化
  (Macへのインストール方法は、[こちらを参照](http://www.phpied.com/installing-jpegtran-mac-unix-linux/)(英語))
- `sprite`を使ってスプライト画像/CSSを作成
- `juicer`を使って、CSS/JSの圧縮/結合
- [htmlcompressor](http://code.google.com/p/htmlcompressor/)を使ってHTMLの最適化

このプロセスをrake taskとして作成すれば、`rake
タスク名`とするだけで一気に終了できる。  

`rsync`や`ftp`なども合わせるとファイルアップロードまで自動化できる。

**Rakeのチュートリアル**

- [Rake Tutorial by Jason Seifer](http://jasonseifer.com/2010/04/06/rake-tutorial)
- [Using the Rake Build Language](http://martinfowler.com/articles/rake.html)
- [Rake Quick Reference by Greg Houston](http://pastie.org/242691)

などが参考になるだろう。もちろん全部英語の文書なので、CSS
Radarの癖にRakeの詳しい説明を知りたい方は、[Twitter@cssradar](http://twitter.com/#!/cssradar)にてリクエストしてほしい。  
私も覚えたてなので、全部の質問には答えることができるかわからないが。

## ウェブデザイナ/フロントエンドデベロッパのRuby

ウェブデザイナ/フロントエンドデベロッパのタスクは多岐に渡る。  
Adobe
Suitesを使いこなし、HTML/CSS/JSを駆使し、ユーザビリティ/アクセシビリティに考慮し、行動心理学を応用しつつ、ウェブサイトをユーザに届ける。  
その上、プログラマの領分であるはずのRubyにまで手を出す。  
それもすべて時間を生み出すための技術。  
その時間がよりよいサイトを生み出すための原動力だから。  
新しいことへの出会いはいつだってインスピレーションへ続く近道だと信じているので、是非チャレンジしてほしい。  
もし今回紹介しなかった便利なスクリプトなどご存知でしたら、是非教えてください。
