module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		csso: {
			dist: {
				src: 'asset/style.css',
				dest: 'asset/style.css'
			}
		},
		stylus: {
			compile: {
				options: {
					'paths': ['asset/style'],
					'compress': false
				},
				files: {
					'asset/style/style.css': 'asset/style/style.styl'
				}
			}
		},
		img: {
			dist: {
				src: 'asset/image'
			}
		},
		optipng: {
			args: ["-o5"]
		},
		jekyll: {
			preview: {
				auto: true,
				server: true
			}
		},
		aws: '<json:grunt-aws.json>',
		s3: {
			key: '<%= aws.key %>',
			secret: '<%= aws.secret %>',
			bucket: 'css.studiomohawk.com',
			access: 'public-read',
			upload: [
				{
					src: '_site/*',
					dest: '.'
				},
				{
					src: '_site/asset/style/*.css',
					dest: 'asset/style/',
					gzip: true
				},
				{
					src: '_site/asset/script/*.js',
					dest: 'asset/script/',
					gzip: true
				}
			]
		},
		watch: {
			css: {
				files: ['asset/style/*.styl'],
				tasks: ['stylus']
			}
		}
	});

	// Load plugin
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-img');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-s3');

	// Default task
	grunt.registerTask('default', 'watch');
	// CSS Build task
	grunt.registerTask('cssbuild', ['stylus','csso']);
	// JavaScript Build task
	grunt.registerTask('jsbuild', ['concat:js','min']);
	// development task
	grunt.registerTask('dev', ['jekyll','watch']);
	// depoy task
	grunt.registerTask('deploy', ['cssbuild','jsbuild','s3']);

};
