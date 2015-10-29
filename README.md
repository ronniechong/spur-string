<img src="https://opentable.github.io/spur/logos/Spur-String.png?rand=1" width="100%" alt="Spur: String" />

String utilities to be used with the [Spur Framework](https://opentable.github.io/spur/).

[![NPM version](https://badge.fury.io/js/spur-string.png)](http://badge.fury.io/js/spur-string)
[![Build Status](https://travis-ci.org/opentable/spur-string.svg?branch=master)](https://travis-ci.org/opentable/spur-string)

# About the Spur Framework

The Spur Framework is a collection of commonly used Node.JS libraries used to create common application types with shared libraries.

[Visit NPMJS.org for a full list of Spur Framework libraries](https://www.npmjs.com/browse/keyword/spur-framework) >>

# Usage

## Install from NPM

```shell
npm install --save spur-string
```

## Require and use the module

```javascript
/* You can use any aliase you would
   like. A common name could be "s". */
var SpurString = require("spur-string");

SpurString("   String to trim   ").trim()
// => "String to trim"
```

# API

#### .clean(string) -> string

Trims and cleans multiple sequential space with one space.

```javascript
SpurString.clean("    String to    clean   ");
// => "String to clean"
```

#### .endsWith(string, search, position = {string.length}) -> boolean

Determines if a string ends with a specific string.

```javascript
SpurString().endsWith("String to check", "check");
// => true
```

#### .isBlank(string) -> boolean

Determines if a value passed in is blank.

```javascript
SpurString().isBlank(""); // => true
SpurString().isBlank("\n"); // => true
SpurString().isBlank(" "); // => true
SpurString().isBlank(null); // => true
SpurString().isBlank(undefined); // => true
SpurString().isBlank("Spur"); // => true
```

#### .lines(string) -> array

Parses a string for new line characters and returns them in an array.

```javascript
SpurString().lines("Hello\nWorld");
// => ["Hello", "World"]
```

#### .lines(source, find, replace, ignorecase=false) -> string

Parses a string for new line characters and returns them in an array.

```javascript
SpurString().replaceAll("Driving my car while avoiding other cars.", "car", "truck");
// => "Driving my truck while avoiding other trucks."
```

#### .startsWith(string, search, position = 0) -> boolean

Determines if a string starts with a specific string.

```javascript
SpurString().startsWith("String to check", "String");
// => true
```

#### .trim(string) -> string

Removes empty spaces around a string.

```javascript
SpurString().trim("   String to trim    ");
// => "String to trim"
```

#### .trimLeft(string) -> string

Removes empty spaces to the left end of a string.

```javascript
SpurString().trimLeft("String to trim       ");
// => "String to trim"
```

#### .trimRight(string) -> string

Removes empty spaces to the right end of a string.

```javascript
SpurString().trimRight("String to trim       ");
// => "String to trim"
```

# Contributing

## We accept pull requests

Please send in pull requests and they will be reviewed in a timely manner. Please review this [generic guide to submitting a good pull requests](https://github.com/blog/1943-how-to-write-the-perfect-pull-request). The only things we ask in addition are the following:

 * Please submit small pull requests
 * Provide a good description of the changes
 * Code changes must include tests
 * Be nice to each other in comments. :innocent:

## Style guide

The majority of the settings are controlled using an [EditorConfig](.editorconfig) configuration file. To use it [please download a plugin](http://editorconfig.org/#download) for your editor of choice.

## All tests should pass

To run the test suite, first install the dependancies, then run `npm test`

```bash
$ npm install
$ npm test
```

# Maintainers

This library is maintained by

  - Agustin Colchado – ***[@acolchado](https://github.com/acolchado)***

# License

[MIT](LICENSE)

# Credit

This module draws inspiration from the [underscore.string](https://github.com/epeli/underscore.string) maintained by [Esa-Matti Suuronen](https://github.com/epeli) and [Christoph Hermann](https://github.com/stoeffel). The reason for the porting of this module simplify it for the use in Node.JS and the Spur Framework.
