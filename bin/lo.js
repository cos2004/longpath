#!/usr/bin/env node

var rimraf = require('rimraf');
var inquirer = require('inquirer');
var path = require('path');

var _path = process.argv[2];

if (_path) {
    var ret = path.resolve(process.cwd()+'/'+_path);
    inquirer.prompt({
        type: "list",
        name: 'value',
        message: 'Confirm Delete "' + ret + '" ?',
        choices: ['Yes','No']
    }, function(ans) {
        if (ans && ans.value === 'Yes') {
            rimraf(ret, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('job done!');
                }
            });
        }
    })
} else {
    console.log('input a path!');
}