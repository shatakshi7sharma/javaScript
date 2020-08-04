let arr = [
  {st:0,en:1},
  {st:3,en:5},
  {st:4,en:8},
  {st:10,en:12},
  {st:9,en:10}
];
let nArr=[];
 function checksmall(ft,lt,ind,arr){

  for (let j=0;j<arr.length;j++){
    if(arr[j].st<= lt  && arr[j].st > ft){
      console.log("found smaller",lt,arr[j].en)
      arr[ind].en=arr[j].en;
      arr.splice(j,1);
      return true;
    }
  }
  return false;
}
while(arr.length > 0){
  let sm = arr[0].st;
  let end = arr[0].en;
  let ind =0;
  for(let i=0;i<arr.length;i++){
    if(sm>arr[i].st){
      sm=arr[i].st;
      end = arr[i].en;
      ind =i;
    }
  }
  if(!checksmall(sm,end,ind,arr)){
    for(let i=0;i<arr.length;i++){
      if(sm == arr[i].st){
      console.log("added",sm,end,i);
       nArr.push({st:sm,en:end});
       arr.splice(i,1);
      }
    }
  }
}
console.log(nArr);
