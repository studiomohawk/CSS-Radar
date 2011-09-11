---
layout: post
category: tool
title: github - pull requestまでの道のり
date: 2011-09-10 20:13:00
---

[github](https://github.com/studiomohawk)を本格的に使い始めて1年くらいだろうか。  
これまで[HTML5 Boilerplate](/tool/2011/03/15/html5boilerplate/)の翻訳以外でpull
requestを送った事がない。  
今回はOctopressというプロジェクトに貢献できる機会がありそうなので、
githubでのfork、ローカル環境でのレポジトリの編集、そしてプロジェクトへのpull
requestまでの道のりを紹介しよう。  
githubの基本的な使い方はもちろんのこと、Jekyllをより便利に、簡単に利用できるフレームワークであるOctopressについても解説していく。

## [Octopress](http://octopress.org/)

このブログのエンジンでもある、[Jekyll](https://github.com/mojombo/jekyll)(Jekyllもオープンソース)をベースに様々な拡張を行ったフレームワークがOctopress。  
作ったまま放置している私のJekyllのテーマ集[\_layouts](http://www.layouts-the.me/)を、この際Octopressに乗せ変えてしまおうと思っている。  

## Githubでforkする

githubのレポジトリはプライベートなものを除いてすべてForkすることが可能だ。

ここでいうforkとはgithubにあるレポジトリを自分のレポジトリとしてコピーすることだと思っていて間違いはないだろう。  
さすがはgithub。[Fork
A Repo](http://help.github.com/fork-a-repo/)という簡潔によくまとまったヘルプページがあるので、この手順に従っていけば誰でも簡単に自分のローカル環境にレポジトリを持つ事が可能だ。

では早速、octopressをforkしてみよう。  
[imathis/octopress
- GitHub](https://github.com/imathis/octopress)のページへ

![Image]({% postfile fork-a-repo.png %}){:class='huge'}

Forkボタンをクリックすると

![Image]({% postfile forked-a-repo.png %}){:class='huge'}

自分のページにレポジトリがコピーされる。こうなった時点でこのレポジトリについては自分の思うがママ。ファイルを消そうと追加しようと自分のレポジトリとして扱われる。  

{% highlight sh %}
git clone git@github.com:studiomohawk/octopress.git
#studiomohawkの部分は自分のユーザ名に差し替える
{% endhighlight %}

そして上記のコマンドを叩けば、ローカル環境にレポジトリがコピーされる。  
私もそうしているがgithubからコピー(clone)するレポジトリはいつも同じディレクトリにしておくと忘れる可能性が低い。  
私はソースコードリーディングのためにもcloneしたりするので[Dropbox](http://db.tt/2usxiol)にgithubというディレクトリを作ってそこにcloneすることにしている。

## Octopressのセットアップ

Octopressのセットアップはそれほど難しくない様子。
[このステップ](http://octopress.org/docs/setup/)に則って順にコマンドを叩いていけばいい。  

{% highlight sh %}
rvm rvmrc trust # rvmの設定を承認する
rvm reload # rmvをリロード
gem install bundler # bundlerをインストール
gem install rake # rakeをインストール
bundle install # bundlerを使って必要なgemをインストール
{% endhighlight %}

そして

{% highlight sh %}
rake install
{% endhighlight %}

とすると、``source``と``sass``ディレクトリが生成される。

ここまでくればOctopressのデフォルトデザインを確認できる。

[![Image]({% postfile octopress-default.png %}){:class='huge'}]({% postfile octopress-default-full.png %}){:class='fancybox'}

{% highlight sh %}
rake generate
rake preview
{% endhighlight %}

Octopressのルートディレクトリで上記のコマンドを叩けばデザインを確認できる。  
(ダミーの記事は別途用意すること)

## 以降のログは順次公開予定

- Octopressの設定について
- Octopressのデザインテーマの変更
- OctopressでAmazon S3にデプロイする(テーマの公開)
- githubで元のプロジェクトにpull request

などやりながら書いているのであくまでも予定だが、大まかに言って上記をカバーする予定。  
例によって質問はメール、あるいは[Twitter@cssradar](http://twitter.com/#!/cssradar)にていつでも受け付けている。

### 参考ページ

- [Help.GitHub - Fork A Repo](http://help.github.com/fork-a-repo/) <span class="small">(2011/09/11 更新)</span> 
- [Octopress Setup - Octopress](http://octopress.org/docs/setup/) <span class="small">(2011/09/11 更新)</span> 
- [Blogging Basics - Octopress](http://octopress.org/docs/blogging/) <span class="small">(2011/09/11 更新)</span>
