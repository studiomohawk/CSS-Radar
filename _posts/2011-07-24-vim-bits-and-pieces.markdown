---
layout: changelog
category: vim
title: Vim - ビギナーズサバイバルガイド
date: 2011-07-24  0:57:55
update: 2011-07-29 23:01:04
---

### Preface <span class="small">(Update: 2011/07/24)</span> {#preface}

Vimにおける設定ファイルである.vimrc。  
私のGoogleサーチによる他者の知の結晶とも言える.vimrcはgithubにあるので、参考になれば。

- [.vimrc](https://github.com/studiomohawk/vim)

Vimで覚えるべきポイントは大きく分けて3つ。
コマンド、プラグイン、そして設定。  
この記事ではその3つにVimについての情報源を追加した4つを軸にしつつ、時系列でエントリを追記する形をとることにする。  
なお、プラグインを追加する際、設定も同時に行う場合が多いが、その場合はプラグインのエントリに記述する。
また、同様に覚えたコマンドをより簡単に呼び出すための設定もコマンドのエントリに記述する。

私のVimに対するアプローチは、Ruby on RailsとjQueryのコアメンバであるYehuda Katz氏の記事、[Everyone Who Tried to Convince Me to use Vim was Wrong](http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/)と同じで、始めからVimのやり方に合わせるのではなく、マウスを使ったって、Control + Sで保存したって、別にかまわないと思っている。

私にとってVimはフィロソフィーではなく、あくまでもツールである。  
便利に使えるからこそのツールで、エンドユーザはその壮大な設計思想など気にする必要はない。自分のペースで自分らしく使いこなす事が真の効率化なのだから。

### コマンド {#command}

#### ファイルを分割ウィンドウで開く <span class="small">(Update: 2011/07/29)</span>

高度なテキストエディタには必ずと言っていいほど存在するファイルを上下、あるいは左右で分割して表示する方法。  
私はCSSファイルは同じ記述は繰り返さないように最大の努力をしているが、HTMLファイルは同じような記述で書けるように最大限の努力をしている。  
そんな際に重宝するのがこのコマンド。

- ``ctrl-w s`` こちらは現在のファイルを左右に分割
- ``ctrl-w v`` こちらは現在のファイルを上下に分割

HTML
+ CSSの組み合わせは大体の場合セットで開いていた方が何かと便利。そんな際は

- ``:sp FILENAME`` FILENAMEを新しく左右に分割されたウィンドウにロード
- ``:vp FILENAME`` FILENAMEを新しく上下に分割されたウィンドウにロード

最近はワイドなモニターが主流なので、左右で分割しても苦にならないだろうが、私は昔の人間なので上下に開くことが多い。

開く方法を紹介したからには、閉じる方法も紹介しよう。

- ``:on`` は現在選択されているウィンドウのみを残して、他のウィンドウを閉じる
- ``:q`` は現在選択されちえるウィンドウを閉じる

コマンドが多いなと感じる事だろうが、sはsplitの略で、vはvertical
splitの略、onはonlyの略で、qはquitなので、覚えやすいはずだ。

#### 行をソートする <span class="small">(Update: 2011/07/29)</span>

- ``:'<,'>!sort``

選択行をアルファベット順に並べ替える。

1. まず、ソートしたい行を選択
2. ``:`` をタイプすると、``:'<,'>'``と表示される
3. ``!sort``とタイプ = ``:'<,'>!sort``

何が便利かというと、私はCSSのプロパティをアルファベット順に並べ替える(IEハックは除外するが、ここは手作業)ので重宝している。

- ``:'<,'>!sort -u``

とすると、ユニークな行だけ、つまり重複行を削除することも可能。

私の環境では日本語に置けるソートは上手く行かないが、ユニーク行を残すことはできた。

#### バッファにあるファイルを全部タブで開く <span class="small">(Update: 2011/07/24)</span>

- ``:tab ball``

### プラグイン {#plugin}

#### [Tabular.vim](https://github.com/godlygeek/tabular) <span class="small">(Update: 2011/07/29)</span>

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

このようになる。(環境によっては、再現されない可能性がある、そんな際は[Bitstream Vera Sans Mono](http://ftp.gnome.org/pub/GNOME/sources/ttf-bitstream-vera/1.10/)をインストールすれば見られるようになる。日本語Fontではないが、プログラマ向Fontとして有名なので、持っていて損はしないだろう)

- ``nnoremap <leader>tab :Tab /:\zs``

.vimrcには、上記のマッピングを追記した。例とは異なるツラの揃え方だが、私はこちらのほうが好み。

- [godlygeek/tabular - GitHub](https://github.com/godlygeek/tabular)

#### [Gundo](http://sjl.bitbucket.org/gundo.vim/) <span class="small">(Update: 2011/07/24)</span>

Gundo.vimはVimの編集履歴のツリーをバージョンコントロールしたように見せてくれるプラグイン。  
単にツリーを表示するだけではなく、そのundoの状態もプレビュできる強力なツール。  

実際に動作している様を見た方が便利さがわかるので、[見てみてほしい](http://vimcasts.org/episodes/undo-branching-and-gundo-vim/) (via Vimcast)。  

- [Gundo - Visualize your Vim Undo Tree](http://sjl.bitbucket.org/gundo.vim/)
- [sjl/gundo.vim - GitHub](https://github.com/sjl/gundo.vim/)

### 設定 {#vimrc}

#### タブをFirefoxのように操る <span class="small">(Update: 2011/07/24)</span>

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


### リソース <span class="small">(Update: 2011/07/29)</span> {#resource}

- [Vim Recipes](http://vim.runpaint.org/toc/)
  / 基本から応用まで非常にシンプルでミニマムなフォーマットで丁寧に解説してくれる (英語)
- [Vimcasts - free screencasts about the text editor Vim](http://vimcasts.org/) / Vimのチュートリアルビデオキャスト。基本のコマンドからプラグインまで詳しく解説している(英語)
- [Smash Into Vim by PeepCode](http://peepcode.com/products/smash-into-vim-i) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート1 $12 (英語)
- [Smash Into Vim II by PeepCode](http://peepcode.com/products/smash-into-vim-ii) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート2 $12 (英語)
