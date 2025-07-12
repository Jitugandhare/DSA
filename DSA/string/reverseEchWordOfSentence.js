function reverseEchWordOfSentence(str) {
    let ans = str.split(" ")
    let rev = ans.map(i => i.split("").reverse().join("")).join(" ")
    return rev
}

let str = "my name is jitu gandhare";
console.log(reverseEchWordOfSentence(str))
//ym eman si utij erahdnag