export function arrayToObject<K extends string, V>(
  arrayOfKeys: K[],
  value: V,
): Record<K, V> {
  return arrayOfKeys.reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: value,
    }),
    {} as Record<K, V>,
  )
}
