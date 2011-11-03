task :default => [:"juicer:css"]

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
    task :dryrun do
      system('rsync _site/ -ave ssh --dry-run --delete studiomo@studiomohawk.com:www/css/')
    end
  desc "rsync"
    task :live do
      system('rsync _site/ -ave ssh --delete studiomo@studiomohawk.com:www/css/')
    end
end

namespace :post do
  desc "Given a title as an argument, create a new post file"
  task :new, [:title, :category] do |t, args|
    filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '-').downcase}.markdown"
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

desc "Launch preview environment"
task :preview do
  system "jekyll --auto --server"
end

desc "Build site"
task :build do
  system "jekyll"
end

desc "Package app for production"
task :package do
  ENV['JEKYLL_ENV'] = 'production'
  
  Rake::Task["build"].invoke

  print "Compressing assets..."
  system "jammit -o assets -c _assets.yml"
  puts "done."
end

desc "Deploy Amazon s3 Using s3Sync"
task :deploy do
  system('s3sync -rpv _site/ css.studiomohawk.com:')
end

desc "Optimise all PNG files with optipng"
task :optipng do
  Dir.glob("_site/**/*.png").each do |file|
    system "optipng -quiet -o7 #{file}"
  end
end
