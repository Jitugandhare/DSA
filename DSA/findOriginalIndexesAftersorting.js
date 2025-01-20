function SortOut(n, a) {

    let temp = a.map((ele, ind) => ({ ele, ind }));  // Step 1: Create an array of objects with 'ele' (value) and 'ind' (original index)

    for (let i = 0; i <= temp.length - 2; i++) {  // Step 2: Outer loop for Bubble Sort
        for (let j = 0; j <= temp.length - i - 2; j++) {  // Step 3: Inner loop for comparing adjacent elements
            if (temp[j].ele > temp[j + 1].ele) {  // Step 4: If current element is greater, swap
                let t = temp[j];  // Swap elements
                temp[j] = temp[j + 1];
                temp[j + 1] = t;
            }
        }
    }

    let originalIndex = temp.map((i) => i.ind);  // Step 5: Extract the original indices after sorting
    return originalIndex.join(" ");  // Step 6: Return a space-separated string of the original indices
}

let n = 5;
let a = [4, 5, 3, 7, 1];
console.log(SortOut(n, a));  // Output: 0 4 2 1 3

