'use strict';

var fs = require('fs');
var util = require('util');
var path = require('path');

var toObject = function (schema, obj) {
  var result = {};
  for (var prop in obj) {
    var value = obj[prop];
    if (prop == 'nested') {
      result = toObject(schema, schema[value]);
    } else if (typeof value === 'object') {
      result[prop] = toObject(schema, value);
    } else {
      result[prop] = value;
    }
  }

  return result;
};

exports.combine = function (json) {
  // Schema: Complete Data Schema
  // Main Key: Main Schema Key

  // Convert JSON to Object
  var obj = JSON.parse(json);
  // Extract First Key
  var firstKey = Object.keys(obj)[0];
  // Run process
  var data = toObject(obj, obj[firstKey]);
  // Set output value
  var res = { };
  res[firstKey] = data;
  // Convert to json
  return res;
};

exports.combineOutput = function (array2combine) {

  var dat = {};

  for (var key in array2combine) {
    var block = array2combine[key];
    for (var key2 in block) {
      for (var key3 in block[key2]) {
        dat[key3] = block[key2][key3];
      }
    }
  }

  return dat;
};

exports.convertObject = function (file) {
  return JSON.parse(file);
};

exports.toJSON = function (obj) {
  return JSON.stringify(obj, null, 4);
};
