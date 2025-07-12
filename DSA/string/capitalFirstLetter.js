function capitalFirstLetter(str){
    let bag=str.split(' ').map(i=>i.charAt(0).toUpperCase()+i.slice(1))

    return bag.join(" ")
}


let str="my name is jitu";
console.log(capitalFirstLetter(str))