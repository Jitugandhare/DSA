function lengthOfLastWord(s) {
    s=s.trim(); //to remove extra spaces from given string
    let temp = s.split(" ");
    let bag=""
    bag+=temp[temp.length-1]
    return bag.length
};


let s= "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s))