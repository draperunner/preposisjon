var assert = require('assert')
var pronomen = require('../lib/index')

suite('pronomen', function () {
  var paaTests = [
    'Voss',
    'voss',
    '  voss  ',
    'Åland',
    'Sortland',
  ]

  var iTests = [
    'Oslo',
    'Drammen',
    'Parkveien',
    'New York',
    'Tyskland',
  ]

  paaTests.forEach(function (t) {
    test('it should return "på" for "' + t + '"', function () {
      assert.equal(pronomen(t), 'på')
    })
  })

  iTests.forEach(function (t) {
    test('it should return "i" for "' + t + '"', function () {
      assert.equal(pronomen(t), 'i')
    })
  })
})
