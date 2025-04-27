var countSubarrays = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let bag = [];
        for (let j = i; j < nums.length; j++) {
            bag.push(nums[j])
            if (bag.length === 3) {
                let b = bag[1] / 2;
                let sum = bag[0] + bag[bag.length - 1]
                if (sum === b) {
                    count++;
                }
            }
        }
    }console.log(count)
};


let nums = [1, 2, 1, 4, 1];
countSubarrays(nums);


let n=[1,1,1];
countSubarrays(n)
