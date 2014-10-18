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
          "public/stylesheets/style.css": "source/less/style.less"
        }
      }
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
          interrupt: true,
        },
        files: 'source/less/**/*.less',
        tasks: ['less:development']
      },
      jade: {
        files: 'views/**/*.jade'
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
