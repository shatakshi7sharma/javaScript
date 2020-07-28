function intersection(firstArray,secondArray){
    thirdSet = new Set();
    for (var i=0;i<=firstArray.length;i++){
     if (firstArray[i] in secondArray){
       
     }
    var common=thirdSet.add(firstArray[i]);
    return common;
    }
    
    }
    intersection([1,2,3,2,5],[2,2,1,7,9]);
    
   // #######################################################################
    
function intersection(firstArray,secondArray){
    let thirdSet = new Set();
    for (var i=0;i<=firstArray.length;i++){
      
      for(let j=0;j<secondArray.length;j++){
        if(firstArray[i]==secondArray[j])
          thirdSet.add(firstArray[i]);
      }
      
    }
    return thirdSet;
 }


    intersection([1,2,3,2,5],[2,2,1,7,9]);
    
    //Time (O) : -> O(nm)
    //space complexity : -> wrost case=o(n) or O(m),(depends which is smaller)    , best case :->O(1)
    //n=len of first array,m=len of second array
