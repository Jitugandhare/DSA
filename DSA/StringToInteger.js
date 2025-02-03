function myAtoi(s) {
    const regex = /^[\s]*([+-]?\d+)/;
    const match = s.match(regex);
    if (!match) return 0;


    let result = Number(match[1]);
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;

    if (result < min) return min;
    if (result > max) return max;

    return result;
};


let s=" -42"
console.log(myAtoi(s))