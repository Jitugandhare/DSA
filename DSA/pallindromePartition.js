function pallindromicPartition(s){
    
}


let s='aab';
console.log(s)



function substrwithKDistinctLetter(n,t,s){
    let temp=[]
    for(let i=0;i<n;i++){
      let bag="";
      for(let j=i;j<n;j++){
        bag+=s[j]
        if(bag.length===t){
          temp.push(bag)
        }
        
      }
    }
    let count=0;
    for(let i=0;i<temp.length;i++){
      if(temp[i][0]!==temp[i][1]){
        count++;
      }
      
    }
    
    console.log(count)
  }
  