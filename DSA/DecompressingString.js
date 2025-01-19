function DecompressString(str) {
    let bag = ''
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 1) {
            let odd = str[i]
            for(let j=0;j<odd;j++){
                bag+=str[i-1]
            }
        }
       
    }return bag;
}

let str = 'a2b3'
let ans = DecompressString(str)
console.log(ans)