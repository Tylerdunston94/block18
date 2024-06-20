// Test cases for the multiplication function
describe('multiplication function', () => {
    // Test for checking if the result is a number
    test('Expect multiplication(2, 3) to be a number', () => {
      expect(typeof multiplication(2, 3)).toBe('number');
    });
  
    // Test for multiplying by 0
    test('Expect multiplication(5, 0) to be equal to 0', () => {
      expect(multiplication(5, 0)).toBe(0);
    });
  
    // Test for negative numbers
    test('Expect multiplication(-4, -4) to be equal to 16', () => {
      expect(multiplication(-4, -4)).toBe(16);
    });
  
    // Test for invalid inputs
    test('Expect multiplication(3, "a") to be an error', () => {
      expect(() => {
        multiplication(3, "a");
      }).toThrow();
    });
  });
  
  // Test cases for the concatOdds function
  describe('concatOdds function', () => {
    // Test for concatenating odd numbers from arrays
    test('Expect concatOdds([1, 2, 3], [4, 5, 6]) to be [1, 3, 5]', () => {
      expect(concatOdds([1, 2, 3], [4, 5, 6])).toEqual([1, 3, 5]);
    });
  
    // Test for empty arrays
    test('Expect concatOdds([2, 4, 6], [8, 10]) to be an empty array', () => {
      expect(concatOdds([2, 4, 6], [8, 10])).toEqual([]);
    });
  
    // Test for duplicate odd numbers
    test('Expect concatOdds([1, 1, 1], [1, 1, 1]) to be [1, 1, 1, 1, 1, 1]', () => {
      expect(concatOdds([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    });
  
    // Test for empty first array
    test('Expect concatOdds([], [2, 4, 6]) to be an empty array', () => {
      expect(concatOdds([], [2, 4, 6])).toEqual([]);
    });
  
    // Test for concatenating odd numbers from arrays with duplicates
    test('Expect concatOdds([3, 1, 5], [5, 7, 9]) to be [1, 3, 5, 5, 7, 9]', () => {
      expect(concatOdds([3, 1, 5], [5, 7, 9])).toEqual([1, 3, 5, 5, 7, 9]);
    });
  });
  