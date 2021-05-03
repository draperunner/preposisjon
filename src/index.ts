import exceptions from './exceptions'
import suffixRules from './suffix-rules'
import { Preposition } from './types'

function preposisjon(place: string): Preposition {
  if (typeof place !== 'string') {
    throw new TypeError(
      'preposisjon expected its argument to be a string, but received ' +
        typeof place,
    )
  }

  const p = place.toLowerCase().trim()

  // Check exceptions
  const exception = exceptions[p]
  if (exception) {
    return exception
  }

  // Check suffix rules
  const suffixes = Object.keys(suffixRules)
  const matchingSuffix = suffixes.find((suffix) => p.endsWith(suffix))
  if (matchingSuffix) {
    return suffixRules[matchingSuffix]
  }

  return Preposition.I
}

export default preposisjon
module.exports = preposisjon
