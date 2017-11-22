var exceptions = require('./exceptions.js')
var suffixRules = require('./suffix-rules.js')

module.exports = function (place) {
  var p = place.toLowerCase().trim()

  // Check exceptions
  var exception = exceptions[p]
  if (exception) {
    return exception
  }

  // Check suffix rules
  const suffixes = Object.keys(suffixRules)
  for (var i = 0; i < suffixes.length; i++) {
    var suffix = suffixes[i]
    if (p.endsWith(suffix)) {
      return suffixRules[suffix]
    }
  }

  return 'i'
}
