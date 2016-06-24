/*
 * grunt-i18n-combinator
 * https://github.com/aessig/grunt-i18n-combinator
 *
 * Copyright (c) 2016 aessig
 * Licensed under the MIT license.
 */

'use strict';

var ic = require('../libs/i18n_combinator.js');
var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('i18n_combinator', 'Combine SimpleSchema i18n files for each schema', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      multiple: true,
      jsonFile: 'i18n_combined.json',
    });

    var combined = [];

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      grunt.log.writeln(f.src);
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      }).map(function (filepath) {
        // Read file source.
        var data = grunt.file.read(filepath);
        grunt.log.writeln(data);
        var out = {};
        var name = path.basename(filepath, path.extname(filepath));
        out[name] = ic.combine(data);
        return out;
      });

      // Handle options.
      //src += options.punctuation;
      if (!options.multiple) {

        var data = ic.combineOutput(src);
        var dest = f.dest + options.jsonFile;
        grunt.file.write(dest, ic.toJSON(data));
        grunt.log.writeln('File "' + options.jsonFile + '" created.');

      } else {
        // Write the destination file.
        for (var key in src) {
          var block = src[key];
          for (var key2 in block) {
            var dest = f.dest + key2 + ".json";
            grunt.file.write(dest, ic.toJSON(block[key2]));
            grunt.log.writeln('File "' + dest + '" created.');
          }
        }
      }

    });

    if (combined.length > 0) {
      var out = ic.combineOutput(combined);

      // Write the destination file.
      grunt.file.write(options.jsonFile, src);

      // Print a success message.
      grunt.log.writeln('File "' + options.jsonFile + '" created.');
    }

  });

};
