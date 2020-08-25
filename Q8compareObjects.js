let x = {'code':
         [{'value':20,'copper':46},{'mohit':45,'shobhit':40}],
         'iod':7
  }
let y={'iod':7,
       'code':
         [{'value':20,'copper':46},{'mohit':45,'shobhit':40}]
}

function iterateArr(arr1,arr2){
  //  let arr1 = arr11.sort((a, b) => a - b);
  // let arr2 = arr22.sort((a, b) => a - b);
  console.log(arr1,arr2,"-----Array");

  for(let i=0;i<arr1.length; i++){
    if(typeof arr1[i] == 'object' && typeof arr2[i] == 'object'){
      iterateObj(arr11,arr22);
    }else if(Array.isArray(arr1[i]) && Array.isArray(ar2[i])){
      let arr11 = arr1[i].sort((a, b) => a - b);
      let arr22 = arr2[i].sort((a, b) => a - b);
        iterateArr(arr11, arr22);
     //   console.log("Array found");
      }else if(arr1[i] != arr2[i]){
        return false;
      }
  }
  return true;
}
function iterateObj(x,y){
  
  for(let i=0; i < Object.keys(x).length; i++){
    let key1 = Object.keys(x).sort();
    let key2 = Object.keys(y).sort();
   // console.log(key1,key2,"----object iterate",Object.keys(x).sort(),Object.keys(y).sort());

    if(typeof x[key1[i]] == 'object' && typeof y[key2[i]] == 'object'){
      console.log(x[key1[i]],y[key2[i]]);
      iterateObj(x[key1[i]],y[key2[i]]);
    }else if(Array.isArray(x[key1[i]]) && Array.isArray(y[key2[i]])){
      let arr1 = Object.keys(x[key1[i]]).sort((a, b) => a - b);
      let arr2 = Object.keys(y[key2[i]]).sort((a, b) => a - b);
      console.log(key1,key2,"----object iterate");
        if(!iterateArr(arr1,arr2)){
          return false;
        }
      }else if(x[key1[i]] != y[key2[i]]){
        return false;
      }
    
  }
  return true;
}
iterateObj(x,y);
