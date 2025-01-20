function threeMaxThreeMin(N, arr) {
    //write code here
    if (N < 3 || N % 2 !== 0) {
        console.log('Not Possible');
        console.log('Not Possible');

        return;
    }

    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;
    let min3 = Infinity;
    for (let i = 0; i < N; i++) {
        if (arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i]
        } else if (arr[i] > max2) {
            max3 = max2;
            max2 = arr[i];
        } else if (arr[i] > max3) {
            max3 = arr[i]
        }

        if (arr[i] < min1) {
            min3 = min2;
            min2 = min1;
            min1 = arr[i]
        } else if (arr[i] < min2 && arr[i] !== min1) {
            min3 = min2;
            min2 = arr[i]
        } else if (arr[i] < min3 && arr[i] !== min2 && arr[i] !== min1) {
            min3 = arr[i]
        }
    }
    console.log(min1, min2, min3)
    console.log(max3, max2, max1);

}


let N = 8
let arr = [1, 2, 3, 4, 2, 1, 5, 6]

threeMaxThreeMin(N, arr)