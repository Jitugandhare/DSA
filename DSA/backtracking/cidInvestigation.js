function cidInvestigation(digits) {
  
    const digitToCharMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    // If the digits string is empty, return an empty array.
    if (digits.length === 0) return [];
    
    // Initialize result array
    let result = [];

    // Recursive helper function to generate all combinations
    function generateMessages(index, currentCombination) {
        // Base case: when we have processed all digits
        if (index === digits.length) {
            result.push(currentCombination); // Add the current combination to result
            return;
        }
        
        // Get possible characters for the current digit
        const currentDigit = digits[index];
        const possibleChars = digitToCharMap[currentDigit] || [];
        
        // Iterate over each possible character and recurse
        for (let char of possibleChars) {
            generateMessages(index + 1, currentCombination + char); // Append current char and move to next digit
        }
    }

    // Start the recursive function with index 0 and empty currentCombination
    generateMessages(0, '');

    return result;
}

// Example usage
const inputDigits = "23"; // Input digit sequence
const possibleMessages = cidInvestigation(inputDigits);
console.log(possibleMessages); // Output the possible messages
