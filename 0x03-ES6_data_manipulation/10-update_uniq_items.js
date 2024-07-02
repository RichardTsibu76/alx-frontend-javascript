/**
 * Map method updating to 1 pertinent to quantity
 *
 * @param {Map} map - the map method.
 * @returns {Map} - An updated map with quantities
 * @throws {Error} - Throws an error if not arg !map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  return map;
}
