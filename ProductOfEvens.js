function ProductOfEvens(arr) {
  let c=arr.reduce((acc,val)=>{
    if(val.score%2==0){
        acc*=val.score
    }
      

    return acc


  },1)
  return c  
}


const players = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 62 },
    { name: "David", score: 73 },
    { name: "Emily", score: 87 },
    { name: "Frank", score: 55 },
    { name: "Gina", score: 90 }
];


let result = ProductOfEvens(players);
console.log(result)