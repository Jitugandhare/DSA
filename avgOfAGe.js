function avgAge(arr) {
    let sum = arr.reduce((acc, val) => +acc + Number(val.age), []);
    let avg = sum / arr.length;
    return Math.floor(avg)

}

const people = [
    { name: "Jitu", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 47 },
    { name: "Emily", age: 28 }
];
let avg = avgAge(people);
console.log(avg)