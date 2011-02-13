module Jekyll
	require 'less'
	class LessConverter < Converter
		safe true
		priority :low

		def matches(ext)
			ext =~ /less/i
		end

		def output_ext(ext)
			".css"
		end
		def convert(content)
			begin
				Less.parse "#{content}"
			rescue StandardError => error
				puts "!!! LESS Error: " + error.message
			end 
		end
	end

end

