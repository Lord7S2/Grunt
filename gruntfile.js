module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // COMPILAR LESS
        less: {
            development: {
                files: {
                    'dist/css/main.css': 'src/less/main.less'
                }
            }
        },

        // MINIFICAR JS
        uglify: {
            build: {
                files: {
                    'dist/js/main.min.js': 'src/js/script.js'
                }
            }
        },

        // WATCH (opcional mas útil)
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            }
        }

    });

    // carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tarefas
    grunt.registerTask('default', ['less', 'uglify']);
};