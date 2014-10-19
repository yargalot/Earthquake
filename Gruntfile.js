module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Start the express server
    develop: {
      server: {
        file: 'bin/www',
        nodeArgs: ['--debug'],            // optional
        // args: ['appArg1', 'appArg2'],     // optional
        // env: {
        //   NODE_ENV: 'development'         // optional
        // }
      }
    },


    // Less file compilation
    less: {
      development: {
        options: {
          paths: ["bower_components/bootstrap/less"]
        },
        files: {
          "public/styles/style.css": "source/less/style.less"
        }
      }
    },


    // JsHint
    jshint: {
      all: ['Gruntfile.js', 'public/**/*.js']
    },


    // Open the browser
    open : {
      dev : {
        path: 'http://localhost:3000',
        app: 'Google Chrome'
      }
    },


    // Start the watch process
    watch: {
      options: {
        livereload: 3117,
      },
      less: {
        options: {
          livereload: false,
          interrupt: true,
        },
        files: 'source/less/**/*.less',
        tasks: ['less:development']
      },
      jade: {
        files: 'views/**/*.jade'
      },
      css: {
        files: ['public/styles/**/*.css']
      },
      scripts: {
        files: ['public/js/**/*.js'],
        tasks: ['jshint']
      },
      express: {
        files: ['app.js', 'routes/**/*.js']
      },
      gruntfile: {
        files: 'Gruntfile.js'
      }
    }
  });

  // Load all the tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['less', 'develop', 'open', 'watch']);

};
