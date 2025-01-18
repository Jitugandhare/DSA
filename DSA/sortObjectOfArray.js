function avgAge(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
    return sortedArr
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