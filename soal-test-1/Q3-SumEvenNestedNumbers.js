/**
 * Recursively calculates the sum of all even numbers in a nested object.
 *
 * @param {Object} obj - The input nested object.
 * @returns {number} The sum of all even numbers found in the object.
 *
 * @example
 * // Example usage:
 * const input1 = {
 *   outer: 2,
 *   obj: {
 *     inner: 2,
 *     otherObj: {
 *       superInner: 2,
 *       notANumber: true,
 *       alsoNotANumber: "yup"
 *     }
 *   }
 * };
 * const result1 = sumEvenNestedNumber(input1);
 * // Result: 6 (2 + 2 + 2)
 *
 * const input2 = {
 *   a: 2,
 *   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
 *   c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
 *   d: 1,
 *   e: { e: { e: 4 }, ee: 'car' }
 * };
 * const result2 = sumEvenNestedNumber(input2);
 * // Result: 12 (2 + 2 + 2 + 2 + 4)
 */
function sumEvenNestedNumber(obj) {
  let total = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      // If the property is an object, recursively call the function for that object.
      total += sumEvenNestedNumber(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      // If the property is an even number, add it to the total.
      total += obj[key];
    }
  }

  return total;
}

module.exports = sumEvenNestedNumber