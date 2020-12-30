#!/usr/local/bin/node

var g = require('./generators.js')
for (i = 0; i < 12888; i++) {
  console.log(g.startupify(i));
}
