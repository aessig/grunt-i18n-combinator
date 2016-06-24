/*
 * grunt-i18n-combinator
 * https://github.com/aessig/grunt-i18n-combinator
 *
 * Copyright (c) 2016 aessig
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    // Configuration to be run (and then tested).
    i18n_combinator: {
      combinator: {
        options: {
          /*
          * Only Work if multiple == true. Set output file suffix
          */
          outputSuffix: '',
          /*
          * Only Work if multiple == true. Set output file prefix
          */
          outputPrefix: '',
          /*
          * If you want a single file set to 'false'
          */
          multiple: true,
          /*
          * If you want a single file here is define the name of the output file
          */
          jsonFile: 'i18n_combined.json',
        },
        files: [
          /**
          * Put all your .js files schema in here
          */
          { src: 'test/fixtures/json/*.json', dest: 'test/fixtures/output/' }
        ],
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this
  // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'i18n_combinator', 'nodeunit']);

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);

};
