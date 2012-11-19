---
layout: post
category: vim
title: "Vim"
date: 2011-07-24 00:57:55 +0900
update: 2011-12-25T12:58:27+09:00
tldr: "フロントエンドデベロッパにとって大切なツールの1つがテキストエディタ。そのテキストエディタとしてVimを選択して1年と少し。まだまだ使いこなしていると言い切れるまでには時間がかかりそうだけど、Vim以外のエディタは使いづらくはなってきた。コマンドなんてあとで覚えていけばいい、そんな風に使っている私のVimを使う上でのTipsを紹介しよう。"
---

## はじめに {#preface}

Vimにおける設定ファイルである.vimrc。  
私のGoogleサーチによる他者の知の結晶とも言える.vimrcはgithubにあるので、参考になれば。

- [.vimrc](https://github.com/studiomohawk/vim)

Vimで覚えるべきポイントは大きく分けて3つ。
コマンド、プラグイン、そして設定。  
この記事ではその3つにVimについての情報源を追加した4つを軸にしつつ、時系列でエントリを追記する形をとることにする。  
なお、プラグインを追加する際、設定も同時に行う場合が多いがその場合はプラグインのエントリに記述する。
また同様に覚えたコマンドをより簡単に呼び出すための設定もコマンドのエントリに記述する。

私のVimに対するアプローチは、Ruby on RailsとjQueryのコアメンバであるYehuda Katz氏の記事、[Everyone Who Tried to Convince Me to use Vim was Wrong](http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/)と同じで、始めからVimのやり方に合わせるのではなくマウスを使ったって、Control + Sで保存したって、別にかまわないと思っている。

私にとってVimはフィロソフィーではなく、あくまでもツールである。  
便利に使えるからこそのツールでエンドユーザはその壮大な設計思想など気にする必要はない。自分のペースで自分らしく使いこなす事が真の効率化なのだから。

## コマンド {#command}

### ファイルを分割ウィンドウで開く

高度なテキストエディタには必ずと言っていいほど存在するファイルを上下、あるいは左右で分割して表示する方法。  
私はCSSファイルは同じ記述は繰り返さないように最大の努力をしているが、HTMLファイルは同じような記述で書けるように最大限の努力をしている。  
そんな際に重宝するのがこのコマンド。

- ``ctrl-w s`` こちらは現在のファイルを左右に分割
- ``ctrl-w v`` こちらは現在のファイルを上下に分割

HTML + CSSの組み合わせは大体の場合セットで開いていた方が何かと便利。そんな際は

- ``:sp FILENAME`` FILENAMEを新しく左右に分割されたウィンドウにロード
- ``:vp FILENAME`` FILENAMEを新しく上下に分割されたウィンドウにロード

最近はワイドなモニターが主流なので、左右で分割しても苦にならないだろうが、私は昔の人間なので上下に開くことが多い。

開く方法を紹介したからには、閉じる方法も紹介しよう。

- ``:on`` は現在選択されているウィンドウのみを残して、他のウィンドウを閉じる
- ``:q`` は現在選択されちえるウィンドウを閉じる

コマンドが多いなと感じる事だろうが、sはsplitの略で、vはvertical
splitの略、onはonlyの略で、qはquitなので、覚えやすいはずだ。

### 行をソートする

- ``:'<,'>!sort``

選択行をアルファベット順に並べ替える。

1. まず、ソートしたい行を選択
2. ``:`` をタイプすると、``:'<,'>'``と表示される
3. ``!sort``とタイプ = ``:'<,'>!sort``

何が便利かというと、私はCSSのプロパティをアルファベット順に並べ替える(IEハックは除外するが、ここは手作業)ので重宝している。

- ``:'<,'>!sort -u``

とすると、ユニークな行だけ、つまり重複行を削除することも可能。

私の環境では日本語に置けるソートは上手く行かないが、ユニーク行を残すことはできた。

### バッファにあるファイルを全部タブで開く

- ``:tab ball``

## プラグイン {#plugin}

### [snipMate](https://github.com/garbas/vim-snipmate)

色々あって利用してこなかったsnipMateに挑戦中。オリジナルのsnipMateは更新が止まっている様子なので、こちらのforkをおすすめされた。  
snipMateはTextMateのスニペット機能を模したプラグイン。特定のキーワードとtabで登録したスニペットが呼び出せる。  

### [MatchTag](http://www.vim.org/scripts/script.php?script_id=3818)

MatchTagはNotePad++で使えたあの便利なHTMLタグを選ぶとセットになっているタグをハイライトしてくれるプラグイン。
ずーとこれだけが気になっていたけれど、これで完璧。HTMLを生業にしている人は必携。

### [Prefixr](https://github.com/mr-szymanski/prefixr)

CSS3をクロスブラウザで適応するにはブラウザプリフィックス(-o-や、-webkit-など)を記述する必要がある。  
Nettus+にて作成された[Prefixr](http://prefixr.com/)というウェブツールはW3Cで現時点で発表されている記述やどのブラウザプリフィックス付きの記述1つを書いておけばボタン1つで全プリフィックスに変換してくれる強力なツール。  
そのAPIを利用してvimのプラグインにしたのがこれ。

変換したい値を選択して``:Prefixr``とコマンドを叩けばウェブツールと同じことができる。  
Vimから離れずに強力なツールが利用できるので非常に時短。

### [Tabular.vim](https://github.com/godlygeek/tabular)

Tabular.vimは``=``や、``:``のような決まった文字を基点にツラを合わせるためのプラグイン。  
読みやすいコードを目指すあまり、書いている最中でもツラを合わせないと気が済まない人には必携だ。

例えば、

{% highlight css %}
#selector {
	display: inline-block;
	*display: inline;
	margin-right: 4px;
	zoom: 1;
	letter-spacing: normal;
	word-spacing: normal;
	vertical-align: top;
}
{% endhighlight %}

のようなCSSを

``:Tab\:``

とすると

{% highlight css %}
#selector {
	display        : inline-block;
	*display       : inline;
	margin-right   : 4px;
	zoom           : 1;
	letter-spacing : normal;
	word-spacing   : normal;
	vertical-align : top;
}
{% endhighlight %}

このようになる。(環境によっては再現されない可能性がある、そんな際は[Bitstream Vera Sans Mono](http://ftp.gnome.org/pub/GNOME/sources/ttf-bitstream-vera/1.10/)をインストールすれば見られるようになる。日本語Fontではないがプログラマ向Fontとして有名なので持っていて損はしないだろう)

- ``nnoremap <leader>tab :Tab /:\zs``

.vimrcには、上記のマッピングを追記した。例とは異なるツラの揃え方だが私はこちらのほうが好み。

- [godlygeek/tabular - GitHub](https://github.com/godlygeek/tabular)

### [Gundo](http://sjl.bitbucket.org/gundo.vim/)

Gundo.vimはVimの編集履歴のツリーをバージョンコントロールしたように見せてくれるプラグイン。  
単にツリーを表示するだけではなく、そのundoの状態もプレビュできる強力なツール。  

実際に動作している様を見た方が便利さがわかるので、[見てみてほしい](http://vimcasts.org/episodes/undo-branching-and-gundo-vim/) (via Vimcast)。  

- [Gundo - Visualize your Vim Undo Tree](http://sjl.bitbucket.org/gundo.vim/)
- [sjl/gundo.vim - GitHub](https://github.com/sjl/gundo.vim/)

### [Pathogen](https://github.com/tpope/vim-pathogen)

vim-pathogenはVimのプラグインをGitのsubmoduleで管理することができるプラグイン。  
Vimのプラグイン管理は非常に面倒な作業の1つ。gitの使い方を覚えなければならないところが慣れるまでは大変かもしれないが、それだけの価値はある。

**プラグイン(fugitive)を追加**

{% highlight sh %}
git submodule add http://github.com/tpope/vim-fugitive.git bundle/fugitive  
# git submoduleでfugitiveをbundle/fugitiveに追加  
git submodule update --init  
# submoduleを登録して、アップデート
{% endhighlight %}

**プラグインを削除**

{% highlight sh %}
rm -r -f 削除するプラグインのディレクトリ (例: bundle/fugitive)  
# .gitmodulesをエディタで開いて、削除するsubmoduleの該当行を削除する  
git rm -r 削除するプラグインのディレクトリ (最後のスラッシュはいれない)  
git submodule sync
{% endhighlight %}

**プラグインをアップデート**

{% highlight sh %}
git submodule foreach git pull origin master
{% endhighlight %}

なお、pathogenを利用するためには、.vimrcに

{% highlight vim %}
call pathogen#runtime_append_all_bundles()
call pathogen#helptags()
{% endhighlight %}

と追加する必要がある。この行はfiletypeの設定以前に呼び出す必要があるため、.vimrcの最初の行に追加することをおすすめする。

- [tpope/vim-pathogen - GitHub](https://github.com/tpope/vim-pathogen)

## 設定 {#config}

### タブをFirefoxのように操る

- ``Control + Tab``で次のタブへ
- ``Control + Shift + Tab``で前のタブへ
- ``Control + t``で新しいタブを作る

{% highlight vim %}
" keymap Firefox like tab move {
nmap <C-S-tab> :tabprevious<CR>
nmap <C-tab> :tabnext<CR>
map <C-S-tab> :tabprevious<CR>
map <C-tab> :tabnext<CR>
imap <C-S-tab> <Esc>:tabprevious<CR>i
imap <C-tab> <Esc>:tabnext<CR>i
nmap <C-t> :tabnew<CR>
imap <C-t> <Esc>:tabnew<CR>
" }
{% endhighlight %}

## 参考リンク {#link}

- [John Anderson ( sontek ) - Turning Vim into a modern Python IDE](http://sontek.net/turning-vim-into-a-modern-python-ide) / VimをPython IDEとして使うための設定。Python使いではなくても参考になる(英語)
- [Vim Toolbox, 2010 Edition :: phly, boy, phly](http://mwop.net/blog/249-Vim-Toolbox,-2010-Edition) / 10年ほどVimを利用しているというMatthew Weier O'Phinney氏のVimについての記事(英語)
- [Coming Home to Vim / Steve Losh](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) / 様々なテキストエディタからVimに落ち着いた経緯と細かい設定の解説がおすすめ(英語)
- [Vim Recipes](http://vim.runpaint.org/toc/) / 基本から応用まで非常にシンプルでミニマムなフォーマットで丁寧に解説してくれる (英語)
- [Vimcasts - free screencasts about the text editor Vim](http://vimcasts.org/) / Vimのチュートリアルビデオキャスト。基本のコマンドからプラグインまで詳しく解説している(英語)
- [Smash Into Vim by PeepCode](http://peepcode.com/products/smash-into-vim-i) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート1 $12 (英語)
- [Smash Into Vim II by PeepCode](http://peepcode.com/products/smash-into-vim-ii) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート2 $12 (英語)
