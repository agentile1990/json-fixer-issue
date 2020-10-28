'use strict';

const JsonFixer = require('json-fixer');

const inputStr = '{"weight":.4}';
console.log('inputStr: ', inputStr);

const { data, changed } = JsonFixer(inputStr);
console.log('data: ', data);
console.log('changed:', changed);
