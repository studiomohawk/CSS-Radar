---
layout: post
title: Git バージョンコントロール
category: git
date: 2011-01-29 00:00:00
update: 2011-12-03T01:40:50+09:00
tldr: "バージョンコントロールといえばGit。あのLinus
Torvalds氏が作っただけにシンプルで使いやすいGitを使ってバージョンコントロールをしよう。そう、今すぐにでもはじめて1つ心配事を減らす。GUIも沢山あるので思っているよりは簡単に使えるはず。マスターしなくてもいいので、知っている技だけを使ってバックアップだらけのフォルダに別れを告げよう。"
toc:
- {text: バージョンコントロールについて, hash: whatis}
- {text: Gitのインストール, hash: install}
- {text: Gitの基本用語, hash: term}
- {text: gitをインストールした後にやるべきこと, hash: todo}
- {text: Gitの基本的なワークフロー, hash: workflow}
- {text: GitのTips & Tricks, hash: tips}
- {text: Githubの使い方, hash: github}
- {text: ヘルパスクリプト, hash: helper}
- {text: 参考リンク, hash: link}
---

## バージョンコントロールについて {#whatis}

バージョンコントロール。まだ始めていなかったら、今からでも遅くはない。  

- 作業用フォルダがstyle.bk20110128なんて名前であふれている
- なんでこの変更したのか、覚えていない。もう3ヶ月も前の話だし
- 誰が最新のファイル持ってるかわからないまま、作業を開始、もう1度やり直し

HTMLであろうと、CSSであろうと、JSであろうと、何であろうとソースコードを人間は必ずどこかで例のような目にあうのだ。    

バックアップも、更新履歴も、システムでやればいいじゃない。を解決してくれるのが*Git*。  
セットアップも簡単で、利用するのも簡単。
あのLinuxの父、Linus TorvaldsがLinux Kernelを管理するために開発した、というオリガミは信頼の証。

## Gitのインストール {#install}

※以下はMac環境での説明になるが、Windowsでもほとんど変わらない。

[OSX Installer for Git](http://code.google.com/p/git-osx-installer/downloads/list?can=3)から、自分のOSバージョンにあわせてdmgをダウンロード。[Winはこちら](http://code.google.com/p/msysgit/downloads/list?can=3)  
あとはインストーラにお任せ。

私は[Homebrew](http://mxcl.github.com/homebrew/)を使って、Gitをインストールした。

Gitはアプリケーションフォルダには*入らない*系統のアプリ。Terminalで使える。  
*Terminal*(日本語だと端末？)の時点で、たぶん半数以上のユーザの興味を奪った自信があるが、騙されたと思って立ち上げてほしい。アプリケーションフォルダのユーティリティフォルダにあるはずだ。  

では、<code>git --version</code>  
をTerminalへコピペしてみてほしい。ちゃんとインストールできていれば、  
<code>git version 1.7.1.1</code>  
というような表示がされるだろう。

で、コマンドラインでしか使えないの？ なんてことはないので、

- [SmartGit](http://www.syntevo.com/smartgit/index.html)(個人利用はフリー、Winにも対応)
- [Tower](http://www.git-tower.com/)(betaテスト中フリー、Macのみ)
- [TortoiseGit](http://code.google.com/p/tortoisegit/)(フリー、Winのみ)

こちら、GitをGUIで利用できるようにするアプリ達。私はTowerをテストしつつ、Macでも、Winでも使えるSmartGitをメインで利用している。どちらも日本語版はないが、基本の用語さえ覚えてしまえば問題ないだろう。
GUIアプリをインストールしても、もう少しTerminalは開いたままに。

## Gitの基本用語 {#term}

- *レポジトリ(Repository)* \- 更新履歴などを管理するバージョンコントロールの要になる保管庫。
- *コミット(Commit)* \- エディタでいうならば保存に近いコミット。Gitに対して変更が完了したよ、と伝えるコマンド。コミットにはメッセージが必要で、どこをどうして変更したのか伝えることで履歴管理が可能になる
- *クローン(Clone)* \- Gitでは0からレポジトリを作成するのも簡単だが、既存のレポジトリをクローンすることができる。多人数で開発をする際は非常に便利
- *ブランチ(Branch)* \- メインの開発からの分岐を作成するブランチ。<q>"Git のブランチモデルは、Git の機能の中でもっともすばらしいものだという人もいるほど"</q> <cite>[Pro Git](http://progit.org/book/ja/ch3-0.html)</cite>

## Gitをインストールした後にやるべきこと {#todo}

Terminalはまだ開いたままだろうか？  
準備が整ったら以下のコマンドを、必要な部分は修正してから、Terminalにて実行。

- まずは自己紹介をしよう

{% highlight bash %}
git config --global user.name "名前"
git config --global user.email メールアドレス@example.com
{% endhighlight %}

- 標準のエディタを設定

*Terminalから利用する場合にコミットメッセージを書くのに使うエディタ。たいていの場合Terminalのデフォルト、viかvimが使われる。それ以外のエディタが好みの場合は設定しよう。

{% highlight bash %}
git config --global core.editor emacs
{% endhighlight %}

- ホワイトスペースを無視する

Gitではホワイトスペース1つを追加してもファイルを変更したと認識される(Rubyではホワイトスペースは大事)が、大抵の場合、ホワイトスペース1つでコミットする、ということもないだろう。

{% highlight bash %}
git config --global apply.whitespace nowarn
{% endhighlight %}

- すべてのGitレポジトリに無視ファイルを適応

Macなら.DS_Store(普段は見えないけれどGitは認識する)など、OSが自動で生成するファイルとか、毎回.gitignore(無視リストファイル)をレポジトリに追加したり、その.gitignoreをコミットしたりするのは面倒。

{% highlight bash %}
git config --global core.excludesfile ~/.gitignore
{% endhighlight %}

このコマンドのままだとホームディレクトリに.gitignoreがあるから--globalで読んでねという意味になる。  
私はこのファイルを[Dropbox](http://db.tt/jxIW2Rp)を使ってすべての環境で同じファイルを見るようにしている。

Dropboxにdotというディレクトリを作成しその下に.gitignoreファイルを作成してる

{% highlight bash %}
git config --global core.excludesfile /Users/[ユーザディレクトリ]/Dropbox/dot/.gitignore
{% endhighlight %}

Macならこんな具合。

.gitignoreファイルの文法は

{% highlight bash %}
# '#' から始まる行はコメント
# foo.txtというファイル名は無視
foo.txt
# .htmlで終わるファイルを無視。'\*'はワイルドカード
*.html
# '!'は例外。上の例から引き続きで、.htmlで終わるファイルは無視するけどfoo.htmlは例外。
!foo.html

# Macユーザなら、下記で基本はOK。参考: https://github.com/github/gitignore/blob/master/Global/OSX.gitignore

.DS_Store?
Icon?
# Thumbnails
._*
# Files that might appear on external disk
.Spotlight-V100
.Trashes
{% endhighlight %}

## Gitの基本的なワークフロー {#workflow}

それでは先ほど紹介した用語と、ほかのいくつかのGitのコマンドを交えながらGitの基本的なワークフローを説明しよう。

その前に少しTerminalで使えるコマンドを少々。

- *cd* \- ”Change Directly”。ディレクトリを変更するコマンド。<code>cd ../</code>とすれば、親ディレクトリにも移動できる、HTMLのリンクと同じ。
- *pwd* \- 現在のディレクトリを教えてくれる。Macだけかも
- *ls* \- 現在のディレクトリに含まれるファイルをリストアップしてくれる、Winだと<code>ls -a</code>としないとだめ？
- *touch* \- ファイルを作成できる。<code>touch style.css</code>

ファイルの移動や、削除ももちろんコマンドでできるが。慣れないうちは上記の4つで十分だ。私もコマンドになれてきたとはいえ、使うBashコマンドの7割は上記の4つという程度。

それでは、Gitの世界へようこそ。最初は面倒だなと思うこともあるけれど、これから幾多の困難をともにする強力なパートナとなってくれるだろう。

- <code>git init</code>

既存のレポジトリをクローンしない場合、<code>git init</code>はgitのスタートを告げるコマンド。  
作業ディレクトリに対して.gitディレクトリを作成する。  

Macユーザ恐れるなかれ、.gitディレクトリ、だけではないが.(ドット)から始まるファイル、ディレクトリは普通はFinderには見えない隠し要素になる。  
Terminalで<code>ls</code>とすれば、きちんと存在が確認できる。

{% highlight bash %}
defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder
{% endhighlight %}

または上記のコマンドを叩くと見えるようになる。  
おお、うざい。と思ったら、

{% highlight bash %}
defaults write com.apple.finder AppleShowAllFiles FALSE
killall Finder
{% endhighlight %}

で元に戻せる。[TotalFinder](http://totalfinder.binaryage.com/)というFinderにタブを追加できるアプリケーションなら、GUIでOn/Offできる機能もついてくるのでおすすめ($15)(ちょっと重いけど、便利)。

- <code>git add</code>

.gitが作成された作業ディレクトリに必要なファイルを作成/コピーしてきたら、<code>git add</code>コマンドで、ファイルをレポジトリに追加する。  
私は大概<code>git add .</code>としてしまう。最後の.(ドット)は、まだレポジトリに追加されていないファイル全部、という意味だ。  
もちろん、<code>git add ファイル名</code>としてファイルを1つづつ追加することも可能。

※readme.mdというテキストファイルを追加して、そこにプロジェクトの概要などを書き留めておくと、便利だ。.mdはMarkdownというライトウェイトマークアップ言語の拡張子。

- <code>git commit</code>

初めてのコミット。まずはプロジェクトの開始を伝えるコミットからスタート。

{% highlight bash %}
git commit -a -m "Initial Commit"
{% endhighlight %}

\-aフラグは、すべての変更に対してコミットするという意味。便利だが、ある理由で1ファイルを修正したのか、そのある理由が複数ファイルに渡る修正なのか、それとも？となってしまうので、コミットの単位については明確な理由がかける範囲で。  
\-mフラグは、エディタを開かず、その場でコミットメッセージを書けるようにする。その後'(シングルクォート)か"(ダブルクォート)で囲んだ部分がメッセージになる。日本語でももちろん問題ない。

- <code>git status</code>

それではgitの現状を確認してみよう。<code>git status</code>では、.gitディレクトリに含めれるファイルすべてを密かに監視している。  
ファイルは追加(add)されているか？ コミット済みなのか？　コミットから変更されたか？ 前回のコミットから変更されたか？  
git statusはそれらの状態を教えてくれる便利なコマンドだ。  

- <code>git log</code>

ファイルに変更を加え、いくつかのコミットを行った後、しばらくすると変更点についてはすっかり忘れている。  
そんな時はコミットメッセージを読めばわかる。(わかるようにコミットメッセージを書くことが大事)

{% highlight bash %}
git log --graph --pretty=oneline
{% endhighlight %}

とフラグを渡しつつ、<code>git log</code>とすると下記のようにコミット1回につき1行で、表示される。

{% highlight bash %}
7366587c589fe6ee60aeff553e899dc13086d7ec About Responsive Web Design is finished
28b07e6c8fa6299c9c6b3321a339b1c7881e2fe4 erase meta since I use .htaccess
90187a85261b208abbb0c52511fcf675ebe4739d fix css little bit
5035c4eabe855efbac15596663190a6126eb0880 Read me was old
4600e678e757950e5d6a7c7fbfc9a6420333e1c2 Ready to deploy
{% endhighlight %}

ここでは残念ながら地味な表示だが、Terminal内では、デキる感じがしないでもないように、黒背景にグリーンが映えるマトリックスな世界を繰り広げられる(Terminalの設定による)。  
[pimping out git log](http://www.jukie.net/bart/blog/pimping-out-git-log)で紹介されていた

{% highlight bash %}
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
{% endhighlight %}

とすると、git logのデフォルトで1行、色つきフォーマットでログを見ることが可能

- <code>git branch</code>

Gitの真打ち、branch。ブランチは分岐を表示・作成するコマンド。  

コミットがすべて完了しているmaster(デフォルト)で、

{% highlight bash %}
git branch newfeature
{% endhighlight %}

とすると、masterをベースにnewfeatureというブランチが作成される。  

私は現状、以下のようにブランチモデルを作っている。

- master(デフォルト) = 現時点で本番環境を管理するブランチ。ここへのコミットは少ない。gitnのtag機能を使ってバージョンナンバを持っている。
- develop = 開発バージョン。基本的にすべての作業はこのブランチをメインして行う。ここへのコミットは非常に多い。
- feature = developとの違いは、開発の中でも特に新しいデザインパターン用のコーディングなどを行う。
- fix = 文字通り修正用のブランチ。修正が完了次第コミットし、必要に応じてmasterまたはdevelopとマージする。

開発の規模感にもよるが、HTML、CSS、JavaScriptをメインで担当する私にとっては上記のブランチでまかなえる。  
上記のブランチモデルは、[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)を参考に、よりシンプルにしたバージョン。
このブランチの詳しい使い方については、また別の記事としたい。

- <code>git merge</code>

branchにはmergeは欠かせない。表裏一体の存在といえる。branchを作成し、その場で開発を続けていても、いつかはmasterへマージする日がやってくる。  
マージする際、衝突があればgitはそれを解決しないとマージできないと警告を発する。SmartGitを利用していれば、グラフィカルな環境で衝突している部分を表示してくれる。

<code>git merge</code>をする際には、まず現在いるブランチをコミットして、から<code>git checkout master</code>というように、マージさせたいブランチに切り替える。  
自分が今いるブランチがどこなのか、ほかにどんなブランチがあるかを確認するには、<code>git branch</code>とすれば

{% highlight bash %}
*master
newfeature
{% endhighlight %}

というように表示してくれる。  
ちなみに、Terminal用プログラムBashの設定で

{% highlight bash %}
function parse_git_branch {
  ref=$(git-symbolic-ref HEAD 2> /dev/null) || return
  echo "("${ref#refs/heads/}")"
}

RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
GREEN="\[\033[0;32m\]"

PS1="$RED\$(date +%H:%M) \w$YELLOW \$(parse_git_branch)$GREEN\$ "
{% endhighlight %}

上記を追加すると、コマンドプロンプト(コマンドを叩く左側に出る文字列)に、現在のブランチを表示してくれる。
USERディレクトリ下に.bashrcという名前で上記を追加して保存。既存でなければ、ファイル名を.bashrcとし保存すればOK。

では無事にmasterへブランチを切り替えられただろうか。

<code>git merge myfeature</code>

これで、myfeatureブランチはmasterブランチへマージが完了する。

## GitのTips & Tricks {#tips}

### git alias

コマンドラインの便利さはコマンドを覚えてしまえば、色々なことがコマンド1つ、あるいは2つでできてしまう、ということにつきる。  
gitもGUIツールの利便性は否定しないが、コマンドラインから利用することにしている私。  
少しでもタイプする文字を減らしたいので、そんな際に便利なのが``git alias``。  
あらかじめ登録したコマンドをショートカットのように呼び出す事ができる機能だ。

``git config -e --global``

とすると、システムワイドで利用するgitの設定ファイル.gitconfigファイルをエディタで開ける。  
すでに自分のメールと名前は設定済みのはずなので、ファイルに追記すれば、aliasを利用できる。

6行目までは、単純によく使うコマンドを2文字に省略しただけで、  
``lg``は[この記事](http://www.jukie.net/bart/blog/pimping-out-git-log)から拝借した。``git log``を少しセクシーにしてくれる。

``fix``は私があまりにもよく繰り返すコミットしたあとでそのコミットに入れるべき変更に気がついたり、コミットを重ねるべきタイミングでない際に使う``--amend``オプションをaliasにした。  
コミット後、編集が必要だったファイルがあれば、そのファイルを編集し、``git add
FILE``と追加して、``git fix``とすると、前のコミットメッセージを繰り返しタイプせずとも以前のコミットメッセージを利用してコミットできる。

``unstage``は``add``の反対でgitのstageに追加したくないファイルを削除してくれる。

{% highlight bash %}
[alias]
st = status
ci = commit
br = branch
co = checkout
df = diff
dc = diff --cached
lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
fix = commit --amend -C HEAD
unstage = reset HEAD
{% endhighlight %}

### git diff

- フラグなしに``git diff``とした場合、最後のcommitと現在の状態を比較する
- ``git diff -- <filename>``とすると、1ファイルのみを比較できる
- ``git diff --cached``ではステージングにあるファイル群とHEAD(*)を比較する

\* HEADは現在のブランチと同義だと思っていていいそうだ。([What is git head, exactly? - Stack Overflow](http://stackoverflow.com/questions/2304087/what-is-git-head-exactly))

あってはならない事だとは思うが、Commitを忘れて次の編集時に気がつくなんて事はそこそこ多く発生する。  
バージョンコントロールを初めたばかりならなおさらだろう。
そんな時にも便利なのが``git diff``だ。

もちろん、チームでの作業の場合、マスタをCommitする際に、他の人が作業した部分をレビューするのには欠かす事ができないコマンド。

## Githubの使い方 {#github}

### fork

forkはGithub内で公開されているレポジトリを自分のレポジトリとしてコピーしてくる事を指す。  
利用したいレポジトリを見つけたら、forkボタンをクリックすれば自分のレポジトリにコピーが完成。この時点でどんな変更を行おうとそれは自分のレポジトリ内だけで完結する。  
その変更をオリジナルにも反映するべきという場合にはPull
Requestをすることでオリジナルレポジトリの所有者に変更を伝える事ができる。  

{% highlight bash %}
git clone git@github.com:ユーザ名/レポジトリ名.git
{% endhighlight %}

forkしたレポジトリをローカル環境にclone。  
ちなみにコマンドラインで上記を実行する際は自分がどのディレクトリにいるのか確認しておこう。  
``pwd``で自分の居場所を教えてくれる。  
レポジトリ名でディレクトリが生成されるので、
ついでにremoteの設定をしておこう。この設定をしておけばオリジナルレポジトリで変更があった際にその変更をfetchできる。

{% highlight bash %}
cd レポジトリ名 # まずはそのディレクトリに移動
git remote add upstream オリジナルのレポジトリのgitパス #パスはgithubのレポジトリのページにあるのでコピー
git fetch upstream # 変更をfetch
git merge upstream/master # 変更を自分のブランチにmergeする
{% endhighlight %}

## ヘルパスクリプト {#helper}

### Git Extras

[visionmedia/git-extras](https://github.com/visionmedia/git-extras)

Git ExtrasはGitに便利コマンドを追加するスクリプト集。  

- ``git commits-since yesterday`` で昨日からのコミットだけを見る事ができたり、
- ``git delete-submodule lib/foo`` でlib/fooのsubmoduleを削除したり、
- ``git-touch [filename]`` でfilenameを作成して、``git add``したり、
- ``git undo`` で最後のコミットを削除したりする。

インストールは簡単。
{% highlight bash %}
curl https://raw.github.com/visionmedia/git-extras/master/bin/git-extras | INSTALL=y sh
{% endhighlight %}

紹介した以外にも沢山のコマンドが追加されるので入れておいても損はしないと思う。

## 参考リンク {#link}

- [Pro Git](http://progit.org/book/ja/) \- オンラインでなら無料で日本語訳されたPro Gitを読むことができる。まだ私自身すべてを読み終えたわけではないが、かなり勉強になる
- [Git cheat sheets (github)](http://help.github.com/git-cheat-sheets/) \- Githubにあるgitのチートシート
- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/) \- ブランチモデルの実例をコマンドともに解説している
- [git(1) Manual Page](http://www.kernel.org/pub/software/scm/git/docs/) \- gitのマニュアルページ。コマンドのフラグなどはこちら。git helpからコマンドでも参照できる
- [Git ユーザマニュアル (バージョン 1.5.3 以降用)](http://www8.atwiki.jp/git_jp/pub/git-manual-jp/Documentation/chunked/index.html) \- 上記リンクの日本語版
- [Get Started with Git (A List Apart)](http://www.alistapart.com/articles/get-started-with-git/) \- A List ApartにてAl Shaw氏による記事
- [GitCasts](http://gitcasts.com/) \- Gitのスクリーンキャスト。英語だが、グラフィカルな環境でしか覚えられない人には最適
