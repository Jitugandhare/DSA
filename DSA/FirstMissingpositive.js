var firstMissingPositive = function (nums) {
    let n = nums.length;
    let seen=new Array(n+1).fill(false);
    for(const num of nums){
        if(num>0 && num<=n){
            seen[num]=true;
        }
    }
    for(let i=1;i<=n;i++){
        if(!seen[i]){
            return i;
        }
    }
    return n+1;
};



let nums = [1,2,0]
let ans=firstMissingPositive(nums)
console.log(ans)

let nums1 = [3,4,-1,1]
let ans1=firstMissingPositive(nums1)
console.log(ans1)
