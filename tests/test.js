var assert = require('assert')
var pronomen = require('../lib/index')

suite('pronomen', function () {
  var paaTests = [
    'Voss',
    'voss',
    '  voss  ',
    'Åland',
    'Sortland',
    'Aksnes',
    'Nesttun',
    'Cuba',
  ]

  var iTests = [
    'Oslo',
    'Drammen',
    'Parkveien',
    'New York',
    'Tyskland',
    'Indonesia',
    'Irland',
    'Japan',
    'Lofoten',
    'Storbritannia',
    'Andesfjellene',
    'Asia',
    'Bergen',
    'Drøbak',
    'Finnmark fylke',
    'Hamar kommune',
    'Nord-Norge',
    'New York',
    'Rondane',
    'Setesdalen',
    'Sør-Spania',
    'Trøndelag',
    'Tyskland',
    'Vladivostok',
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
