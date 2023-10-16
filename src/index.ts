import { paaExceptions, iExceptions } from './exceptions'
import { paaSuffixes } from './suffix-rules'
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
  if (paaExceptions.has(p)) {
    return Preposition.PÅ
  }

  if (iExceptions.has(p)) {
    return Preposition.I
  }

  // Check suffix rules
  if (paaSuffixes.some((suffix) => p.endsWith(suffix))) {
    return Preposition.PÅ
  }

  return Preposition.I
}

export default preposisjon
