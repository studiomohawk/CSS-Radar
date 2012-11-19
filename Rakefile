desc "Deploy Amazon s3 Using s3Sync"
task :deploy do
  system('s3sync -rpv _site/ css.studiomohawk.com:')
	#system('s3cmd sync --progress -M --acl-public --add-header "Content-Encoding:gzip" --add-header "Cache-Control: max-age=31449600" _site/ s3://seven.studiomohawk.com --exclude "*.*" --include "*.js" --include "*.css"')
end
