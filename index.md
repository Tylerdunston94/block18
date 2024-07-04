# Test Specifications

## multiplication function

### Test for checking if the result is a number
- **Expectation**: The result of `multiplication(2, 3)` should be a number.
- **Pseudocode**:
  - Call the function `multiplication(2, 3)`.
  - Check if the type of the result is 'number'.

### Test for multiplying by 0
- **Expectation**: Multiplying any number by 0 should return 0.
- **Pseudocode**:
  - Call the function `multiplication(5, 0)`.
  - Check if the result is 0.

### Test for negative numbers
- **Expectation**: Multiplying two negative numbers should return a positive number.
- **Pseudocode**:
  - Call the function `multiplication(-4, -4)`.
  - Check if the result is 16.

### Test for invalid inputs
- **Expectation**: Providing non-numeric inputs should throw an error.
- **Pseudocode**:
  - Call the function `multiplication(3, "a")`.
  - Check if the function throws an error.

## concatOdds function

### Test for concatenating odd numbers from arrays
- **Expectation**: Concatenating odd numbers from two arrays should return an array of odd numbers from both arrays.
- **Pseudocode**:
  - Call the function `concatOdds([1, 2, 3], [4, 5, 6])`.
  - Check if the result is `[1, 3, 5]`.

### Test for empty arrays
- **Expectation**: If both arrays contain no odd numbers, the result should be an empty array.
- **Pseudocode**:
  - Call the function `concatOdds([2, 4, 6], [8, 10])`.
  - Check if the result is `[]`.

### Test for duplicate odd numbers
- **Expectation**: If there are duplicate odd numbers in the arrays, the result should include all duplicates.
- **Pseudocode**:
  - Call the function `concatOdds([1, 1, 1], [1, 1, 1])`.
  - Check if the result is `[1, 1, 1, 1, 1, 1]`.

### Test for empty first array
- **Expectation**: If the first array is empty and the second array has no odd numbers, the result should be an empty array.
- **Pseudocode**:
  - Call the function `concatOdds([], [2, 4, 6])`.
  - Check if the result is `[]`.

### Test for concatenating odd numbers from arrays with duplicates
- **Expectation**: Concatenating odd numbers from two arrays should include all odd numbers from both arrays, including duplicates.
- **Pseudocode**:
  - Call the function `concatOdds([3, 1, 5], [5, 7, 9])`.
  - Check if the result is `[1, 3, 5, 5, 7, 9]`.
