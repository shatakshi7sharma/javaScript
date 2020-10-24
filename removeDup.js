var removeDups=[1,3,3,3,4,4,2,1,0];
var set = new Set();
removeDups.map(item=>set.add(item));
console.log(set);
