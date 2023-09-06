/**
 * Finds the maximum sum of a subarray with a given length.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} num - The length of the subarray.
 * @returns {number|null} The maximum sum of the subarray or null if num > arr.length.
 *
 * @example
 * // Example usage:
 * const result1 = findMaxSubarraySum([100, 200, 300, 400], 2);
 * // Result: 700 (300 + 400)
 *
 * const result2 = findMaxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
 * // Result: 39 (4 + 2 + 10 + 23)
 *
 * const result3 = findMaxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
 * // Result: 5 (6 + -1)
 */
function findMaxSubarraySum(arr, num) {
    if (num > arr.length) {
      return null; // Return null if num is greater than the array length
    }
  
    let maxSum = 0;
    let tempSum = 0;
  
    // Calculate the sum of the first 'num' elements
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
  
    // Slide the 'num'-sized window through the array to find the maximum sum
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
  }
  
  module.exports = findMaxSubarraySum