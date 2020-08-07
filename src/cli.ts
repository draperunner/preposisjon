#! /usr/bin/env node
import preposisjon from './index'

if (process.argv.length >= 3) {
  for (let i = 2; i < process.argv.length; i++) {
    console.log(preposisjon(process.argv[i]))
  }
}
