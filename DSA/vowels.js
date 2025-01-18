function findVowel(s) {

    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let data=s.toLowerCase().split("").forEach(ele => {
        if(vowel.includes(ele)){
            count++;
        }
    });



    return count;

}
let s = "My name is raj";
console.log(findVowel(s))