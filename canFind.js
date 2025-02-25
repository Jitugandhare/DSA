function canFindSum(N, A) {
    let result = [];
    
    // Stack for finding the largest element to the left
    let left = new Array(N).fill(-1);  // Will store the index of the largest element to the left
    let stack = [];

    for (let i = 0; i < N; i++) {
        // Maintain a decreasing stack for the largest element to the left
        while (stack.length > 0 && A[stack[stack.length - 1]] <= A[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = A[stack[stack.length - 1]]; // Store the largest element to the left
        }
        stack.push(i); // Push current index onto the stack
    }

    // Stack for finding the smallest element to the right
    let right = new Array(N).fill(-1);  // Will store the index of the smallest element to the right
    stack = [];

    for (let i = N - 1; i >= 0; i--) {
        // Maintain an increasing stack for the smallest element to the right
        while (stack.length > 0 && A[stack[stack.length - 1]] >= A[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = A[stack[stack.length - 1]]; // Store the smallest element to the right
        }
        stack.push(i); // Push current index onto the stack
    }

    // Calculate leftValue - rightValue for each element
    for (let i = 0; i < N; i++) {
        let leftValue = left[i] !== -1 ? left[i] : 0;  // If no left element exists, set it to 0
        let rightValue = right[i] !== -1 ? right[i] : 0;  // If no right element exists, set it to 0
        result.push(leftValue - rightValue);  // Subtract the smallest value to the right from the largest value to the left
    }

    return result;
}

let N = 5;
let A = [5, 4, 1, 3, 2];

console.log(canFindSum(N, A));  // Expected output: [-2, 0, 6, 1, 3]
