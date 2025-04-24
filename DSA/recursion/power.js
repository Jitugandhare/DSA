// Power Function - Recursive Description Given two
//  integers a and b, we need to find the value of ab.



function pow(a, b) {
    if (b === 0) return 1;
    let hp = pow(a, Math.floor(b / 2));
    if (b % 2 === 0) {
        return hp * hp
    } else {
        return a * hp * hp

    }
}


let [a,b]=[2,5];
console.log(pow(a,b))