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

desc 'Ping pubsubhubbub server.'
task :ping do
  require 'cgi'
  require 'net/http'
  puts 'Pinging pubsubhubbub server'
  data = 'hub.mode=publish&hub.url=' + CGI::escape("http://feeds.feedburner.com/CssRadar")
  http = Net::HTTP.new('pubsubhubbub.appspot.com', 80)
  resp, data = http.post('http://pubsubhubbub.appspot.com/publish',
                         data,
                         {'Content-Type' => 'application/x-www-form-urlencoded'})

  puts "Ping error: #{resp}, #{data}" unless resp.code == "204"
end
