module Jekyll
  # Compiled LESS CSS into CSS. You must specify an empty YAML front matter
  # at the beginning of the file.
  # .less -> .css
  class juicerConverter < Converter
    safe true
    priority :low
    pygments_prefix "\n"
    pygments_suffix "\n"

    def setup
      return if @setup
      require 'juicer'
      @setup = true
    rescue LoadError
      STDERR.puts 'You are missing a library required for juicer. Please run:'
      STDERR.puts '  $ [sudo] gem install juicer'
      raise FatalException.new("Missing dependency: juicer")
    end

    def convert(content)
      setup
      begin
        juicer merge --force _site/style/master.css
        rescue => e
        puts "Juicer Exception: #{e.message}"
      end
    end
  end
end
