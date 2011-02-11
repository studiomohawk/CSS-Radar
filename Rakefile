task :default => [:"juicer:css"]

namespace :juicer do
  desc 'Merges stylesheets'
    task :css do
      sh 'juicer merge --force _site/style/master.css'
    end
end

desc "rsync _site"
  task :rsync => :"juicer:css" do
    system('rsync -avz --delete -e _site/ ssh studiomo@studiomohawk.com:/www/css')
end

rsync -ave ssh studiomo@studiomohawk.com:wwww/css/ _site/
