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
					paths: ['asset/style','node_modules/grunt-contrib-stylus/node_modules'],
					compress: false,
          urlfunc: 'embedurl'
				},
				files: {
					'asset/style/master.css': 'asset/style/master.styl'
				}
			}
		},
		jekyll: {
			preview: {
				auto: true,
				server: true
			}
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-jekyll');

	// Default task
	grunt.registerTask('default', 'watch');
	// CSS Build task
	grunt.registerTask('cssbuild', ['stylus', 'csso']);
	// JavaScript Build task
	grunt.registerTask('jsbuild', ['concat:js', 'min']);
	// development task
	grunt.registerTask('dev', ['watch']);
	// depoy task
	grunt.registerTask('deploy', ['cssbuild', 'img']);

};
