function searchInsertPosition(arr,t){
    let l=0;
    let r=arr.length-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2)
        if(arr[mid]===t){
            return mid
        }else if(arr[mid]<t){
            l=mid+1;
        }else{
            r=mid-1
        }
    }
    return l
}


let a=[1,3,5,6];
let t=5;
console.log(searchInsertPosition(a,t))