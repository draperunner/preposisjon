import assert from 'assert'
import preposisjon from '../src/index'

suite('preposisjon', function () {
  const paaTests = [
    'Voss',
    'voss',
    '  voss  ',
    'Åland',
    'Sortland',
    'Aksnes',
    'Nesttun',
    'Cuba',
    'agder',
    'akkerhaugen',
    'alstahaug',
    'andenes',
    'askim',
    'asorene',
    'bagn',
    'bahamas',
    'bali',
    'barbados',
    'bardufoss',
    'berkåk',
    'bermuda',
    'billingstad',
    'biri',
    'bjørkelangen',
    'blindern',
    'bokn',
    'borneo',
    'bornholm',
    'bryne',
    'byrkjelo',
    'bømlo',
    'cuba',
    'dodekanesene',
    'dokka',
    'dombås',
    'dominica',
    'dovre',
    'dønna',
    'eidsvoll',
    'eina',
    'elverum',
    'evje',
    'fagernes',
    'falster',
    'fannrem',
    'fauske',
    'fedje',
    'figgjo',
    'fiji',
    'filippinene',
    'finnsnes',
    'finse',
    'fitjar',
    'flesland',
    'flisa',
    'fokstua',
    'fosen',
    'frans josefs land',
    'frosta',
    'frøya',
    'fuerteventura',
    'furuset',
    'fyn',
    'færøyene',
    'geilo',
    'giske',
    'gjøvik',
    'gol',
    'gotland',
    'gran',
    'gran canaria',
    'grenada',
    'greåker',
    'grip',
    'grua',
    'grue finnskog',
    'grønland',
    'gvarv',
    'hadeland',
    'haganes',
    'halsa',
    'hamar',
    'haram',
    'hareid',
    'hawaii',
    'hebridene',
    'hedmarken',
    'helgeland',
    'hermansverk',
    'hinna',
    'hitra',
    'hovden',
    'hvaler',
    'hønefoss',
    'island',
    'jamaica',
    'java',
    'jeløya',
    'jersey',
    'jessheim',
    'jevnaker',
    'jylland',
    'jæren',
    'jørpeland',
    'kanariøyene',
    'kapp verde',
    'kios',
    'kløfta',
    'kolbotn',
    'kongsberg',
    'kongsvinger',
    'koppang',
    'korsika',
    'kos',
    'kreta',
    'kråkerøy',
    'kvikne',
    'kykladene',
    'kyrksæterøra',
    'kypros',
    'kårstø',
    'lade',
    'laksevåg',
    'langeland',
    'lanzarote',
    'leira',
    'lena',
    'lesja',
    'levanger',
    'lillehammer',
    'lindesnes',
    'lindås',
    'lisleby',
    'lista',
    'lolland',
    'lunner',
    'lyngør',
    'lørenskog',
    'madagaskar',
    'madeira',
    'madla',
    'majorstua',
    'maldivene',
    'mallorca',
    'malta',
    'marshalløyene',
    'mauritius',
    'melhus',
    'meråker',
    'minnesund',
    'mo',
    'mo i rana',
    'modum',
    'moi',
    'molde',
    'momarken',
    'mongstad',
    'moster',
    'mysen',
    'møhlenpris',
    'møre',
    'namdalseid',
    'nesbyen',
    'nesna',
    'nesodden',
    'newfoundland',
    'new-zealand',
    'nordfjordeid',
    'nordkapp',
    'nordmøre',
    'novaja semlja',
    'notodden',
    'ny-caledonia',
    'ny-guinea',
    'ny-zealand',
    'nærbø',
    'oppdal',
    'oppegård',
    'orkanger',
    'orknøyene',
    'os',
    'otta',
    'puerto rico',
    'randaberg',
    'raufoss',
    'rauland',
    'rena',
    'réunion',
    'rhodos',
    'ringebu',
    'ringerike',
    'ringsaker',
    'rjukan',
    'roa',
    'rodos',
    'rognan',
    'romerike',
    'runde',
    'rygge',
    'røros',
    'røst',
    'saltholm',
    'samoa',
    'sandane',
    'sardinia',
    'sel',
    'selje',
    'senja',
    'seychellene',
    'shetland',
    'sjælland',
    'skarnes',
    'ski',
    'skjetten',
    'slemdal',
    'slemmestad',
    'smøla',
    'snåsa',
    'sokna',
    'sola',
    'sollihøgda',
    'sortland',
    'sotra',
    'spikkestad',
    'spitsbergen',
    'sri lanka',
    'stabekk',
    'stad',
    'stange',
    'alstein',
    'steinan',
    'steinkjer',
    'stokmarknes',
    'stord',
    'storhaug',
    'stovner',
    'stranda',
    'strømmen',
    'støren',
    'sula',
    'sumatra',
    'sunndalsøra',
    'sunnmøre',
    'svalbard',
    'sætre',
    'tahiti',
    'taiwan',
    'tasmania',
    'tenerife',
    'time',
    'tingvoll',
    'tjøme',
    'tofte',
    'tolga',
    'tonga',
    'toten',
    'tranby',
    'tretten',
    'trinidad',
    'træna',
    'tune',
    'tveito',
    'tynset',
    'tysnes',
    'ulefoss',
    'ustaoset',
    'utsira',
    'utstein',
    'varhaug',
    'vega',
    'vennesla',
    'vestfossen',
    'vestnes',
    'vest-samoa',
    'vigra',
    'vigrestad',
    'vikna',
    'vinstra',
    'voss',
    'våland',
    'værnes',
    'öland',
    'ørje',
    'ørlandet',
    'øst-timor',
    'ål',
    'åland',
    'ålgård',
    'åmot',
    'åndalsnes',
    'årdalstangen',
    'årnes',
    'ås',
  ]

  const iTests = [
    'Oslo',
    'Drammen',
    'Parkveien',
    'New York',
    'Tyskland',
    'Indonesia',
    'Irland',
    'Japan',
    'Lillestrøm',
    'Lofoten',
    'Storbritannia',
    'Andesfjellene',
    'Asia',
    'Bergen',
    'Drøbak',
    'Finnmark',
    'Hamar kommune',
    'Nord-Norge',
    'New York',
    'Rondane',
    'Setesdalen',
    'Sør-Spania',
    'Trøndelag',
    'Tyskland',
    'Vladivostok',
    'Askvoll',
    'Austevoll',
    'Balestrand',
    'Brunlanes',
    'Bud',
    'Børsa',
    'Etne',
    'Førde',
    'Grue',
    'Gudvangen',
    'Hammerfest',
    'Helgeroa',
    'Hokksund',
    'Hol',
    'Hole',
    'Hov',
    'Hurum',
    'Hvittingfoss',
    'Kirkenes',
    'Klæbu',
    'Krokstadelva',
    'Land',
    'Lom',
    'Moss',
    'Måløy',
    'Namsos',
    'Onsøy',
    'Portør',
    'Rennebu',
    'Rosendal',
    'Rælingen',
    'Salhus',
    'Sandnes',
    'Selbu',
    'Skjåk',
    'Skrova',
    'Solbergelva',
    'Steigen',
    'Tromsø',
    'Tønsberg',
    'Ulstein',
    'Vadsø',
    'Vardø',
    'Vikøy',
    'Vågå',
    'Øystese',
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
