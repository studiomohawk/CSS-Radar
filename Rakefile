# Tasks
desc "Given a title as an argument, create a new post file"
task :write, [:title] do |t, args|
    filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '-').downcase}.markdown"
    path = File.join("_posts", filename)
    if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
    File.open(path, 'w') do |file|
      file.write <<-EOS
---
layout: post
title: "#{args.title}"
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
category:
---
EOS
    end
  puts "Now open #{path} in an editor."
end

desc "Launch preview environment"
task :preview do
  system "jekyll --auto --server"
end

desc "Build LESS"
task :lessbuild do
  # system "laessig observe /style/style.less"
  system "collate -t style.css -d style/ style.less -w"
end

desc "Build LESS for production"
task :lessproduction do
  system "lessc style/style.less > style/style.css"
end

desc "Minify CSS with sqwish"
task :sqwish do
  system "sqwish _site/style/style.css -o _site/style/style.css"
end

desc "Minify JS with UglyfyJS"
task :uglifyjs do
  system "uglifyjs --overwrite _site/script/script.js"
end

desc "Optimise all PNG files with optipng"
task :optipng do
  Dir.glob("_site/**/*.png").each do |file|
    system "optipng -quiet -o7 #{file}"
  end
end

desc "Build site"
task :build do
  system "jekyll"
end

desc "Package app for production"
task :package do

  puts "Build LESS for production..."
  Rake::Task["lessproduction"].invoke

  puts "Build Jekyll..."
  Rake::Task["build"].invoke

  puts "Minify CSS with sqwish..."
  Rake::Task["sqwish"].invoke

  puts "Minify JS with UglyfyJS..."
  Rake::Task["uglifyjs"].invoke

  puts "Optimise all PNG files with optipng..."
  Rake::Task["optipng"].invoke

  puts "git commit -am 'package is done'..."
  system "git commit -am 'package is done'"

  puts "Ready for deploy!"
end

desc "Deploy Amazon s3 Using s3Sync"
task :deploy do
  system('s3sync -rpv _site/ css.studiomohawk.com:')
end