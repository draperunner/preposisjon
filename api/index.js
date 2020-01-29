const { URL } = require('url')
const preposisjon = require('../lib')

module.exports = (req, res) => {
  const url = new URL(req.url, 'https://preposisjon.no')
  const place = url.searchParams.get('place')

  const prep = preposisjon(place)

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    preposisjon: prep,
  }))
}
