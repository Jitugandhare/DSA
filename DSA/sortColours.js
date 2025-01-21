var sortColors = function(nums) {
    let n = nums.length;
    
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;  // Initially, no swap has occurred
        
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {  // Compare adjacent elements
                // Swap the elements
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                isSwapped = true;  // A swap occurred
            }
        }
        
        // If no swaps happened in this pass, the array is already sorted
        if (!isSwapped) {
            break;
        }
    }
    
    return nums;
};


let nums= [2,0,2,1,1,0]
console.log(sortColors(nums))