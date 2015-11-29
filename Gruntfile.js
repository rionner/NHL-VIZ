module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});

  grunt.initConfig({
    jshint: {
      options: {
        client: [
            'public/javascripts/**/*.js',
            '!public/javascripts/vendor'
          ],
        server: ['server/**/*.js'],
        jshintrc: true,
        verbose: true
      },
      support: ['Gruntfile.js']
    },
    less: {
      debug: {
        files: { // compile all less into individual files for testing & debugging
          'build/stylesheets/style.css': 'public/stylesheets/style.less'
        }
      },
      release: { // compile all less into a single css document for release
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
    clean: {
      js: 'build/javascripts',
      css: 'build/css',
      less: 'public/**/*.css'
    }
  });
  grunt.registerTask('default', ['jshint', 'less:debug']);
  grunt.registerTask('js', 'Concatenate and minify static JavaScript assets', ['concat:js', 'uglify:bundle']);
  grunt.registerTask('build:debug', ['jshint', 'less:debug']);
  grunt.registerTask('build:release', ['jshint', 'less:release', 'concat:js', 'uglify:bundle']);
};

