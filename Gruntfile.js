module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});

  grunt.initConfig({
    jshint: {
      options: {
        client: [
            'public/javascripts/**/*.js',
            '!public/javascripts/vendor'
          ],
        jshintrc: true,
        reporter: require('jshint-stylish'),
        verbose: true
      },
      frontend: ['Gruntfile.js']
    },
    less: {
      compile: {
        files: {
          'build/stylesheets/compiled.css': 'public/stylesheets/**/*.less'
        }
      }
    },
    concat: {
      js: {
        files: {
          'build/javascripts/bundled.js': 'public/javascripts/**/*.js'
        }
      }
    },
    uglify: {
      bundle: {
        files: {
          'build/javascripts/bundle.min.js': 'build/javascripts/bundle.js'
        }
      }
    },
    sprite: {
    // Add icons as HTML elements and assign different sprite CSS classes to those elements
    // CSS is used to “crop” different parts of the image, taking only the relevant part of the image for the desired icon.
        icons: {
          src: 'public/images/icons/*.png',
          destImg: 'build/images/icons.png',
          destCSS: 'build/css/icons.css'
      }
    },
    clean {
      js: 'build/javascripts',
      css: 'build/css',
      less: 'public/**/*.css'
    }
  });
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', ['concat:js', 'uglify:bundle']);

};

