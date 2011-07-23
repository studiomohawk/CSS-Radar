---
layout: changelog
category: git 
title: Git - フロントエンドデベロッパのためのgit
date: 2011-07-23 12:34:42
---

### git diff - 2011/07/23 {#gitdiff}

- フラグなしに``git diff``とした場合、最後のcommitと現在の状態を比較する
- ``git diff -- <filename>``とすると、1ファイルのみを比較できる
- ``git diff --cached``ではステージングにあるファイル群とHEAD(*)を比較する

/* HEADは現在のブランチと同義だと思っていていいそうだ。([What is git head, exactly? - Stack Overflow](http://stackoverflow.com/questions/2304087/what-is-git-head-exactly))

あってはならない事だとは思うが、Commitを忘れて次の編集時に気がつくなんて事はそこそこ多く発生する。  
バージョンコントロールを初めたばかりならなおさらだろう。
そんな時にも便利なのが``git diff``だ。

もちろん、チームでの作業の場合、マスタをCommitする際に、他の人が作業した部分をレビューするのには欠かす事ができないコマンド。
