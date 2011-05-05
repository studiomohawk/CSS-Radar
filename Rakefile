task :default => [:"juicer:css"]
sys_head = '_includes/system_head.html'

namespace :juicer do
  desc 'Merges stylesheets'
    task :css => :"juicer:js" do
      sh 'juicer merge --force _site/style/master.css'
    end
  desc 'Merges JavaScripts'
    task :js do
      sh  'juicer merge -i --force _site/js/master.js'
    end
end

namespace :switch do
  desc 'Switch CSS to master.css'
  task :expand do
    text = File.read(sys_head)
    if text =~ /master.min.css/ then
      replace = text.gsub(/master.min.css/, "master.css")
    elsif  text =~ /master.css/ then
      puts 'Your css is already development mode, you sould run rake switch:minify to switch it to production mode'
    end
    File.open(sys_head, "w") {|file| file.puts replace}
  end
  desc 'switch CSS to master.min.css'
  task :toMasterMin => :juicercss do
    text = File.read(sys_head)
    replace = text.gsub(/master.css/, "master.min.css")
    File.open(sys_head, "w") {|file| file.puts replace}
	puts 'Now. You are using minified css.'
  end
end

desc 'Running Jekyll with --server --auto opition'
task :dev do
  system('jekyll --server --auto')
end

namespace :rsync do
  desc "--dry-run rsync"
    task :dryrun => :"juicer:css" do
      system('rsync _site/ -ave ssh --dry-run --delete studiomo@studiomohawk.com:www/css/')
    end
  desc "rsync"
    task :live => :"juicer:css" do
      system('rsync _site/ -ave ssh --delete studiomo@studiomohawk.com:www/css/')
    end
end

namespace :post do
  desc "Given a title as an argument, create a new post file"
  task :new, [:title, :category] do |t, args|
    filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '_').downcase}.markdown"
    path = File.join("_posts", filename)
    if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
    File.open(path, 'w') do |file|
      file.write <<-EOS
---
layout: post
category: #{args.category}
title: #{args.title}
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
---
EOS
    end
    puts "Now open #{path} in an editor."
  end
end
