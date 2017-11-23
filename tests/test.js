var assert = require('assert')
var preposisjon = require('../lib/index')

suite('preposisjon', function () {
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
      assert.equal(preposisjon(t), 'på')
    })
  })

  iTests.forEach(function (t) {
    test('it should return "i" for "' + t + '"', function () {
      assert.equal(preposisjon(t), 'i')
    })
  })
})
