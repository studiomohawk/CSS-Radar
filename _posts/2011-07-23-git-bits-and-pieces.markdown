---
layout: changelog
category: git 
title: Git - フロントエンドデベロッパのためのgit
date: 2011-07-23 12:34:42
update: 2011-10-29 23:57:44
---

### Githubを使う - 2011/10/30 {#github}

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

### git alias - 2011/10/30 {#gitalias}

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

### git diff - 2011/07/23 {#gitdiff}

- フラグなしに``git diff``とした場合、最後のcommitと現在の状態を比較する
- ``git diff -- <filename>``とすると、1ファイルのみを比較できる
- ``git diff --cached``ではステージングにあるファイル群とHEAD(*)を比較する

\* HEADは現在のブランチと同義だと思っていていいそうだ。([What is git head, exactly? - Stack Overflow](http://stackoverflow.com/questions/2304087/what-is-git-head-exactly))

あってはならない事だとは思うが、Commitを忘れて次の編集時に気がつくなんて事はそこそこ多く発生する。  
バージョンコントロールを初めたばかりならなおさらだろう。
そんな時にも便利なのが``git diff``だ。

もちろん、チームでの作業の場合、マスタをCommitする際に、他の人が作業した部分をレビューするのには欠かす事ができないコマンド。
