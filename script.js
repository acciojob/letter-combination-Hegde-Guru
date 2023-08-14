function letterCombinations(input_digit) {
  // Create a mapping of digits to their corresponding letters
  const digitToLetters = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  // Function to generate letter combinations recursively
  function backtrack(index, currentCombination) {
    if (index === input_digit.length) {
      result.push(currentCombination);
      return;
    }

    const letters = digitToLetters[input_digit[index]];
    for (const letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  const result = [];
  if (input_digit.length > 0) {
    backtrack(0, '');
  }
  
  return result.sort();
}

module.exports = letterCombinations;
