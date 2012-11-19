module.exports = function(grunt) {

    grunt.initConfig({
        img: {
            dir: {
                src: 'tests/img',
                dest: 'tests/optimg'
            }
        },
        lint: {
            grunt: ['grunt.js', 'tasks/*.js']
        },
        watch: {
            files: '<config:lint.grunt>',
            tasks: 'lint:grunt'
        },
        jshint: {
            options: {
                es5: true,
                node: true,
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            }
        }
    });

    grunt.registerTask('default', 'lint img');

    grunt.loadTasks('tasks');
};
