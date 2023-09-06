// Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil
// dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

/**
 * Pengerutan array angka dari terbesar ke terkecil
 *
 * @param {number[]} numbers - Array angka yang akan diurutkan.
 * @returns {number[]} - Array baru yang berisi angka yang sudah di urutkan dari yang terkecil.
 *
 * @example
 * // Mengurutkan array dengan angka positif
 * const input = [1, 2, 4, 3, 5, 3, 2, 1];
 * const sorted = SortDescending(input);
 * // sorted is now [5, 4, 3, 3, 2, 2, 1, 1];
 *
 */
function SortDescending(numbers) {
    const length = numbers.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    return numbers;
  }

  module.exports = SortDescending