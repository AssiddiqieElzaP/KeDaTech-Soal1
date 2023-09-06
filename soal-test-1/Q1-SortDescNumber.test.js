const SortDescending = require('./Q1-SortDescNumber');

describe('SortDescending', () => {
  it('should sort an array in descending order', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];

    const result = SortDescending(input);

    expect(result).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});
