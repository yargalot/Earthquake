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
          paths: ["assets/css"]
        },
        files: {
          "public/stylesheets/style.css": "source/less/style.less"
        }
      }
    },


    // Start the watch process
    watch: {
      scripts: {
        files: 'source/less/**/*.less',
        tasks: ['less:development'],
        options: {
          interrupt: true,
        },
      },
    }
  });

  // Load all the tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['less', 'develop', 'watch']);

};
