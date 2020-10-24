class my_Set{
  constructor(){
    this.items=[];
}

empty(){
  return this.items==[];
}  
add(item){

  for(let i=0;i<this.items.length;i++){
    if(this.items[i]==item){
      return this.items;
    }
  }
  this.items.push(item);
  return this.items;
}
remove(item){
  for(let i=0;i<this.items.length;i++){
    if(this.items[i]==item){
      this.items.splice(item,1);
    }
  return "value not exist";
}
}
addrem(array){
  return this.items.concat(array);
}
print(){
  return this.items;
}
get(index){
  return this.items[index];
}

}

var my= new my_Set();

console.log("add",my.add(5));
console.log("remove",my.remove(3));
console.log("addrem",my.addrem([2,3,4,5,6,9]));
console.log("print",my.print());
console.log("get",my.get(2));
