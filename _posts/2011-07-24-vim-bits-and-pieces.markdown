---
layout: changelog
category: vim
title: Vim - ビギナーズサバイバルガイド
date: 2011-07-24  0:57:55
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

#### バッファにあるファイルを全部タブで開く <span class="small">(Update: 2011/07/24)</span>

- ``:tab ball``

### プラグイン {#plugin}

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


### リソース <span class="small">(Update: 2011/07/24)</span> {#resource}

- [Vimcasts - free screencasts about the text editor Vim](http://vimcasts.org/) / Vimのチュートリアルビデオキャスト。基本のコマンドからプラグインまで詳しく解説している(英語)
- [Smash Into Vim by PeepCode](http://peepcode.com/products/smash-into-vim-i) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート1 $12 (英語)
- [Smash Into Vim II by PeepCode](http://peepcode.com/products/smash-into-vim-ii) / Vimのチュートリアルビデオ。基本をわかりやすく解説 パート2 $12 (英語)
