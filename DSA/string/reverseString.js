function reverseString(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    } return rev
}

function revString(str) {
    return str.split("").reverse().join("");
}


let str = "jitu";
console.log(reverseString(str))
console.log(revString(str))