#! /usr/bin/env node
const preposisjon = require('./index')

if (process.argv.length >= 3) {
  for (let i = 2; i < process.argv.length; i++) {
    console.log(preposisjon(process.argv[i]))
  }
}
