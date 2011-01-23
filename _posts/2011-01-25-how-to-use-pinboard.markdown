---
layout: post
title: Pinboardの使い方
published: false
category: tool
---

Yahoo!によるDeliciousに関するPRの失敗から、[Pinboard](http://pinboard.in/u:studiomohawk)は多くのDeliciousユーザを獲得した。日本でも同じようにPinboardへ移行したユーザも多かったそうだ。  
先日、Pinboardの創業者であり、メイン開発担当の1人であるMaciej Ceglowski氏と合って話をする機会があった。  
いい機会なので、私がPinboardをどのように活用しているかを共有しよう。

## アンチソーシャルブックマークサイト - Pinboard

"Pinboard is a bookmarking site and personal archive with an emphasis on speed over socializing."

pinboardの[オフィシャルブログ](http://pinboard.in/blog/)に掲げられているように、PinboardはDeliciousやその他のブックマークサイトと異なり、ソーシャルよりもスピードに焦点をあてた個人用ブックマークアーカイブツール。

Maciej Ceglowski氏は、[Thuktun (Message)](http://thuktun.wordpress.com/)での[インタビュー](http://thuktun.wordpress.com/2011/01/03/an-interview-with-maciej-ceglowski-of-pinboard/)で、Pinboardを作った理由として、下記のように述べている。

> I built Pinboard because I had long wanted a bookmarking site that would serve as a personal archive (meaning store bookmark content in case the original site went offline).
> I was also motivated by the Delicious redesign around the summer of 2009, which I found very unpleasant.

- 1つはオフラインでも読める個人用アーカイブとして
- もう1つは2009年にDeliciousが行ったリデザインが気に入らなくて

という理由からPinboardは誕生した。  

Pinbloardはユーザが増える度にほんの少しずつ加算されていく面白いサインアップフィーシステムをもっている。(現時点では$9.20。私がサインアップした頃は、$8.02)。  
これもサイトのパフォーマンスの担保とスパムフリーな環境を作るために必要なお金ということだ。

## Deliciousとの違い

成り立ちからして異なるのでその違いは明確だが、Pinboardは、[Pinboard or Delicious?](https://pinboard.in/switch/)というページで、わかりやすく違いを教えてくれている。  
少し例を挙げると、

### Pinboardに乗り換える理由

- Deliciousは遅い。特にブックマークをする時に
- オフラインでの閲読のためにブックマークをダウンロードしたい
- プライベート用ブックマークのオプションが欲しい
- 全ブックマークを1度に編集したい

### Deliciousに残る理由

- ブックマークにサムネイルが欲しい
- Firefoxのプラグインが必須
- URLを他のユーザとシェアしたい

などなど、違いが(Deliciousnに残る理由の方は若干ジョークっぽく見えるが)明確に、そしてできないことも正直にできないと宣言していることも、非常にわかりやすい。

## Pinboardで便利だと感じたこと

- まずは、そのスピード

サイトの表示速度も早いし、ブックマークレットからのウェブサイトのブックマークもかなり早い。長年Deliciousを愛用してきた私にとってはかなりの驚きだった。

- ブックマークの編集がとても簡単

ブックマーク系のサイトの最大の弱点が、保存したブックマークの編集。とにかくあれやこれやと考えなしに、タグもつけず、Pinboardにブックマークを保存しつづけ、ほんの1ヶ月ほどでカオスな状態になってしまっていた。
先日、あまりの自分が探しているリンクの見つからなさ加減に、Pinboardを整理しはじめたが、これがとても簡単。

ブックマークのリストの上にある、organizeというテキストリンクをクリックすると、上フレームにPinbloardのメニュー、下フレームにブックマークしたサイトが表示される。  
実際にサイトを見ながら、ブックマークの整理を行う事ができる。noteを追加したり、タグをつけ直したり、もう1度読みふけったり、整理の時間なのを思い出して、read laterにチェックをいれたりとしている間に、300ほどあったブックマークを200ほどに減らし、すべてのブックマークにタグをつけることができた。

- Twitter、Instapaper、Read It Later、Google Readerとの連携

Pinboardは個人用アーカイブサイトだけあってか、自動でTwitterのつぶやきを保存したり、スターを保存したり、Read It Laterに保存した記事をPinboardにも移行したりと、よく使われるアーカイブしておきたいサービスとの連携が強力。
その上、DeliciousとAPIを同じにしているということでサードパーティ製のツールも多くPinboardをサポートしている。  
例えば、iPhoneでもiPadでもMacでも欠かせないRSSリーダ、Reederでもサポートしている。個人的にはこのサポートがPinboardへの移行の決め手だった。

- まだまだ成長段階

ウェブサービスの醍醐味は、成長していくこと。DeliciousはYahoo!に買収されて以来、先進的といわれた開始当初のエッジを失った。ある意味成長の証とも言えるが、より魅力的なサービスとなっていく面白さはなくなってきていた。  
PinboardはMaciej Ceglowski氏の個人マシンで動いていたころから数えても、次の春が3回目という若いサービスだ。  
Maciej Ceglowski氏曰く、今は毎日バグ修正で忙しいそうだが、[このページ](http://pinboard.in/features/)にもあるように、今後様々な機能が投入されていく予定だ。  
そんな成長の様を見ていくのはやはり楽しい。
先ほどのページの一番最後に、"Get acquired by Yahoo and slowly grow useless"とあり、なかなかユーモアを感じさせるところも好ましい。

## 情報の整理 = 情報に振り回されない生活

フロントエンドデベロッパが期待されるタスクの1つに標準を知ること、そしてその標準を実装すること。というのがある。  
実際に標準を追いかけるほど、インターネットの世界で難しいことはない。自他ともに認める情報中毒者の私にとっても、情報の整理とアウトプットが1番難しいと常々感じている。

ReederとRead It Later、そしてPinboardは私にとって欠かす事ができないインプットツールで、このブログがアウトプットツールだ。

ストレスのないPinboardで情報管理を一元化し、すぐに欲しい情報にアクセスできるようにしておこう。
