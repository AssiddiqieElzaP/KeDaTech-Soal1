const sumEvenNestedNumber = require('./Q3-SumEvenNestedNumbers');

describe('sumEvenNestedNumber', () => {
  it('should return 0 for an empty object', () => {
    const input = {};
    const result = sumEvenNestedNumber(input);
    expect(result).toBe(0);
  });

  it('should correctly sum even numbers in nested objects', () => {
    const input1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    };
    const expectedOutput1 = 6;

    const input2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' }
    };
    const expectedOutput2 = 12;

    const result1 = sumEvenNestedNumber(input1);
    const result2 = sumEvenNestedNumber(input2);

    expect(result1).toBe(expectedOutput1);
    expect(result2).toBe(expectedOutput2);
  });
});
