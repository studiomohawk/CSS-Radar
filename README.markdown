## About Public Draft

Public Draft is a blog to jot down stuff I've researched.  
I've made Jekyll Initial Package called JI and this is kinda example for it.

## About JI:

Jekyll Init(JI) is a initial setup for [Jekyll](https://github.com/mojombo/jekyll).  
I just don't have a time to create Jekyll blogs from scratch every time.

I will create 3 branchs: master is for regular blogs, prototype is for prototyping and experiment is, well, for experiments.

I will try to make this as minimum as possible.

## Dependencies:

### Jekyll

Obviously. [Jekyll](https://github.com/mojombo/jekyll)  
And whatever Jekyll is depended on.
I like to use kramdown since I can apply classes to elements

You have to modify \_config.yml. If you have no idea what you should do, you should check [this doc](https://github.com/mojombo/jekyll/wiki/Configuration).

### node.js

- [less.js](http://lesscss.org/) / My CSS preprocessor of choice / `sudo npm install less -g`
- [laessig](https://github.com/akoenig/laessig) / Compile less to css from command line / `sudo npm install laessig -g`
- [CSSO](https://github.com/css/csso) / CSS optimizer / `sudo npm install csso -g`
- [UglifyJS](https://github.com/mishoo/UglifyJS) / JavaScript compressor / `sudo npm install uglify-js -g`

### Misc

- git
- optipng

You can install them from [homebrew](http://mxcl.github.com/homebrew/).  
You might want to install rsync while you're at it.

## Rake tasks:

- `rake write['Your post title']` / Create new markdown file at \_posts dir with proper file name.
- `rake preview` / Just doing `jekyll --auto --server` for previewing
- `rake less-build` / Start laessing process. Use this on different process from `rake preview`
- `rake package` / Packaging everything for production. CSS, Javascript and PNG images are optimized.
- `rake deploy` / Deploy! **YOU HAVE TO CHANGE THIS**

## Question?

You can ask questions [here](https://github.com/studiomohawk/ji/issues/new).

You could also ask anything on [Twitter@cssradar](http://twitter.com/#!/cssradar)

## Licence:

See LICENSE. It's MIT so you can do anything you want.