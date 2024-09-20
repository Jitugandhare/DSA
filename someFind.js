function SomeFind(arr) {
    let FindName=arr.some(i=>i.name==="Jitu")
    return FindName;
    
}

const people = [
    { name: "Jitu", age: 25 },
    { name: "Alice", age: 32 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 47 },
    { name: "Emily", age: 28 }
];
let avg = SomeFind(people);
console.log(avg)