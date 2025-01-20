var palindrome = function (str) {

    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
};


// using two Pointers
var isPalindrome = function (str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("wow")); 
