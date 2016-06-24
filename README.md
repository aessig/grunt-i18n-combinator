# grunt-i18n-combinator

> Combine SimpleSchema i18n files for each schema

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-i18n-combinator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-i18n-combinator');
```

## The "i18n_combinator" task

### Overview
In your project's Gruntfile, add a section named `i18n_combinator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  i18n_combinator: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.outputSuffix
Type: `String`
Default value: `''`

Only Work if multiple == true. Set output file suffix
A string value that is used to do something with whatever.

#### options.outputPrefix
Type: `String`
Default value: `''`

Only Work if multiple == true. Set output file prefix
A string value that is used to do something with whatever.

#### options.multiple
Type: `Boolean`
Default value: `false`

If you want a single file set to 'false'
A string value that is used to do something with whatever.

#### options.jsonFile
Type: `String`
Default value: `i18n_combined.json`

If you want a single file here is define the name of the output file
A string value that is used to do something with whatever.

### Usage Examples

#### Combinator

```js
grunt.initConfig({
  i18n_combinator: {
    combinator: {
      options: {
        multiple: true,
        jsonFile: 'i18n_combined.json',
      },
      files: [
        { src: 'test/fixtures/json/*.json', dest: 'test/fixtures/output/' },
      ],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
