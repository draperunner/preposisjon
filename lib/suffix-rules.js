var arrayToObject = require('./utils.js').arrayToObject

var paaSuffixes = [
  'fjell',
  'fjellet',
  'gata',
  'gaten',
  'nut',
  'nuten',
  'plass',
  'plassen',
  'sete',
  'seter',
  'støl',
  'stølen',
  'sæte',
  'sæter',
  'sætra',
  'toppen',
  'vei',
  'veien',
  'øya',
  'øyene',
]

module.exports = arrayToObject(paaSuffixes, 'på')
