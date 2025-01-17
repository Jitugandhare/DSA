function twoSum(a, t) {
    let arr=a.map((num,ind)=>({num,ind}));
    arr.sort((a,b)=>a.num-b.num);

    let l=0;
    let r=arr.length-1;
    while(l<r){
        let sum=arr[l].num+arr[r].num;
        if(sum===t){
            return [arr[l].ind+1,arr[r].ind+1]
        }else if(sum<t){
            l++
        }else{
            r--
        }
    }
    return [];
}

let a = [2, 7, 11, 15]
let t = 9;
console.log(twoSum(a, t))