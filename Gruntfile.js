module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish'),
        verbose: true
      },
      frontend: ['Gruntfile.js']
    },
    less: {
      compile: {
        files: {
          'build/css/compiled.css': 'public/css/**/*.less'
        }
      }
    },
    concat: {
      js: {
        files: {
          'build/js/bundled.js': 'public/javascripts/**/*.js'
        }
      }
    },
    uglify: {
      bundle: {
        files: {
          'build/js/bundle.min.js': 'build/js/bundle.js'
        }
      }
    }
  });
  // grunt.loadNpmTasks('grunt-contrib-jshint'); now included in require statement
  // grunt.loadNpmTasks('grunt-contrib-less'); now included in require statement
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', ['concat:js', 'uglify:bundle']);
};
