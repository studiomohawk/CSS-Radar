---
layout: post
title: HTML5 Boilerplate
category: tool
date: 2011-03-15 00:00:00
toc:
- {text: HTML5 Boilderplateとは, hash: whatis}
- {text: HTML5 Boilerplateの特筆すべき5つのポイント, hash: feature}
- {text: HTML5 Boilerplateの入手方法, hash: download}
- {text: ビルドスクリプトの使い方, hash: buildscript}
- {text: 参考リンク, hash: link}
---

## HTML5 Boilderplateとは {#whatis}

フロントエンドデベロッパな人たちはウェブ開発プロジェクトを始めるにあたり、HTML、CSS、JSのスケルトン(必要最小限の記述をしたファイル達)を含んだディレクトリを持っている人が多い事だろう。  
私も個人のプロジェクト、仕事でのプロジェクトともに、それぞれに少しだけカスタマイズを行うだけで開発を始めることができるディレクトリを持っている。  

今回紹介する(おそらくすでに紹介するまでもないほど知られているが)[HTML5 BOILERPLATE](http://html5boilerplate.com/)は、Paul IrishとDivya Manianを中心として生み出された膨大な量の知見を詰め込んだHTML5を使ったプロジェクト用のスタートポイント。  
知っての通り、HTML5を使い始めるのは決して今からでも**早すぎるということは決してない**が、HTML5に対応するなんてまだ先、と思っていても、このHTML5
BOILERPLATEに詰め込まれたベスト中のベストプラクティスを吸収しておけば、現在のプロジェクトもより盤石にすることができるはずだ。

## HTML5 Boilerplateの特筆すべき5つのポイント {#feature}

- [Modernizr](http://www.modernizr.com/)

  ModernizrはJavaScriptを利用して、ブラウザでサポートしているHTML5/CSS3機能を検出し、HTMLタグ内のclassにサポート状況を出力したり、IEにおけるHTML5要素のスタイル設定行うユーティリティライブラリ。  
  HTML5での開発には欠かす事ができないライブラリ。

- [CSS](https://github.com/paulirish/html5-boilerplate/blob/master/css/style.css)
  
  HTML5用リセットCSSをベースに、非常に強固なデフォルトスタイルと.clearfixなど便利なツールClassが用意されている。クロスブラウザ対応はIE6にも対応してあり、日本ではまだまだ現実的な対応として求められる箇所なだけに非常に便利。  
  また、プリント用のメディアクエリや、スマートフォン用に使えるメディアクエリの記述もされている

- [HTML](https://github.com/paulirish/html5-boilerplate/blob/master/index.html)

  IEコンディショナルコメントを活用したIE用Classの生成を始めとして、HTML5の新要素を含んだ形で、かつ最小限のスケルトンとして提供されている。

- [JavaScript](https://github.com/paulirish/html5-boilerplate/tree/master/js)

  Google
  CDNが落ちてもローカルからjQueryを呼び出すスニペットを始めに、ユニットテストを行いやすいような設計でJavaScriptのファイル群は用意されている。jQueryの利用を前提にして、プラグインの呼び出しを記述するファイルなどが用意されている。

- パフォーマンス最適化

  HTML5
  Boilerplateでは、クロスブラウザ対応などはもちろんとして、パフォーマンス最適化を最も重視した構成になっている。  
  JSをドキュメントの最後に配置するという非常に当たり前の事から、.htaccessファイルによる最適化(gzipやファイルのキャッシュ設定など)も提供されており、少し前のバージョンからはAntを利用したビルドスクリプトを使って、ファイルの圧縮、結合、キャッシュバスタの設定、画像ファイルの最適化などを自動(コマンドは使うが)で行えるようにできるようにしている。

## HTML5 Boilerplateの入手方法 {#download}

[http://html5boilerplate.com/](http://html5boilerplate.com/)から最新の安定板(1.0
RC
2011/03/11現在)をダウンロードすることができる。まずは、コメントありのファイルをダウンロードして、一通りソースコードを読んでみる事をおすすめする。非常に勉強になる事ばかり。

つい先日から、[http://jp.html5boilerplate.com/](http://jp.html5boilerplate.com/)日本語に翻訳されたバージョン(私が翻訳を行いました。完璧とは言いがたい訳です。誤訳やよりよい翻訳があれば、[githubにて翻訳プロジェクトをクローン](https://github.com/studiomohawk/html5boilerplate-site)していますので、フィードバックをお待ちしています）も利用できるようになっている。

また、[Github](https://github.com/paulirish/html5-boilerplate)からでも入手可能なので、Gitを扱い慣れている場合はそちらから。ブランチとしてコメントのある、なしを選べる(masterがコメントあり、strippedがコメントなし)

他にも15秒でHTML5
Boilerplateをベースに必要なスターティングポイントを生成してくれるサービス、[Initializr](http://initializr.com/)というサイトもある。  
コメント、JavaScript、jQuery(圧縮するか、否かも)、Modernizrの利用、サーバ側の設定ファイル、Google
Analyticsの要不要など、カスタマイズすることが可能。

## ビルドスクリプトの使い方 {#buildscript}

私もAntに詳しくないのでHTML5
Boilerplateのビルドスクリプトの使い方については、IBMのデベロッパワークにお任せすることに。詳しくは[こちら](http://www.ibm.com/developerworks/jp/web/library/wa-html5boilerplate/#build)。

私自身はRakeに慣れてきたので、AntのビルドスクリプトをRakeに置き換えてみようかなと思っている。すでにRakeマスタな人がいたら、ぜひ本家のHTML5
BoilerplateにPull Requestを送ってくださいませ。

## 参考リンク {#link}

- [Paul Irish on HTML5 Boilerplate @YouTube](http://www.youtube.com/watch?v=qyM37XKkmKQ)
- [The Official Guide to HTML5 Boilerplate @Nettuts+](http://net.tutsplus.com/tutorials/html-css-techniques/the-official-guide-to-html5-boilerplate/)
- [HTML5 Boilerplate を使用して Web 開発を容易に始める @IBM Developer Works](http://www.ibm.com/developerworks/jp/web/library/wa-html5boilerplate/)
- [20 Snippets You should be using from Html5 Boilerplate @1st Web Designer](http://www.1stwebdesigner.com/design/snippets-html5-boilerplate/)
