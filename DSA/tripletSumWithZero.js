function tripletWithSumZero(n, a) {
    let count = 0;
    
    // Sort the array
    a.sort((x, y) => x - y);
    
    // Iterate through the array
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && a[i] === a[i - 1]) {
            // Skip duplicate elements
            continue;
        }
        
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const sum = a[i] + a[left] + a[right];
            
            if (sum === 0) {
                // Found a triplet
                count++;
                left++;
                right--;
                
                // Skip duplicate elements
                while (left < right && a[left] === a[left - 1]) {
                    left++;
                }
                
                while (left < right && a[right] === a[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return count;
}



let n = 3;
let a = [-1, -2, 3];
console.log(tripletWithSumZero(n, a));


let n1 = 4;
let a1 = [-1, -1, -2, 3];
console.log(tripletWithSumZero(n1, a1));