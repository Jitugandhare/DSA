function CountVowelSubstr(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let vowels = new Set();
        for (let j = i; j < s.length; j++) {
            // Check if the current character is a vowel
            if ("aeiou".includes(s[j])) {
                vowels.add(s[j]);
            }

            // If we have all 5 vowels, count this substring
            if (vowels.size === 5) {
                count++;
            }
        }
    }

    return count;
}


let s = "aeiouu";
// CountVowelSubstr(s)
console.log(CountVowelSubstr(s))