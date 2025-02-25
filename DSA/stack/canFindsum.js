function canFindSum(N, A) {
    let x = Array(N).fill(-1);
    let y = Array(N).fill(-1);
    let stackX = [];
    let stackY = [];
    for (let i = 0; i < N; i++) {
        while (stackX.length > 0 && A[stackX[stackX.length - 1]] <= A[i]) {
            stackX.pop();
        }
        if (stackX.length > 0) {
            x[i] = stackX[stackX.length - 1] + 1;
        }
        stackX.push(i);
    }
    for (let i = N - 1; i >= 0; i--) {
        while (stackY.length > 0 && A[stackY[stackY.length - 1]] <= A[i]) {
            stackY.pop();
        }
        if (stackY.length > 0) {
            y[i] = stackY[stackY.length - 1] + 1;
        }
        stackY.push(i);
    }

    let result = x.map((xi, index) => xi + y[index]);
    return result;
}

let N=5;
let A = [5, 4, 1, 3, 2];
console.log(canFindSum(N, A));  // Output: [-2, 0, 6, 1, 3]
