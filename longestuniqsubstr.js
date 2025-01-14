function subArray(n, arr) {

    let i = 0;
    let un = new Set();

    for (let j = 0; j < n; j++) {
        while (un.has(arr[j])) {
            un.delete(arr[i]);
            i++;
        }
        un.add(arr[j]);

    }
    let sub = [...un]
    return sub
}

let arr = [1, 2, 3, 2, 3, 4, 5, 2, 3, 5, 6, 8, 9];
let n = arr.length;
let ans = subArray(n, arr);
console.log(ans)
