const findMaxSubarraySum = require('./Q2-FindMaxSubarraySum'); // Update the path as needed

describe('findMaxSubarraySum', () => {
  it('should return null when num is greater than the array length', () => {
    const input = [1, 2, 3];
    const num = 4;

    const result = findMaxSubarraySum(input, num);

    expect(result).toBeNull();
  });

  it('should correctly find the maximum subarray sum for valid input', () => {
    const input1 = [100, 200, 300, 400];
    const num1 = 2;
    const expectedOutput1 = 700;

    const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
    const num2 = 4;
    const expectedOutput2 = 39;

    const input3 = [-3, 4, 0, -2, 6, -1];
    const num3 = 2;
    const expectedOutput3 = 5;

    const result1 = findMaxSubarraySum(input1, num1);
    const result2 = findMaxSubarraySum(input2, num2);
    const result3 = findMaxSubarraySum(input3, num3);

    expect(result1).toBe(expectedOutput1);
    expect(result2).toBe(expectedOutput2);
    expect(result3).toBe(expectedOutput3);
  });
});
