class Book{
  constructor(title,author){
    this.title=title;
    this.author=author;
  }
  getTitle(){
    return (`Title:${this.title}`);
  }
  getAuthor(){
    return (`Author:${this.author}`);
  }
}
var PP=new Book("Pride and Prejudice","Jane Austen");
var H=new Book("Hamlet","William Shakespeare");
var WP=new Book("War And Peace","Leo Tolstoy");
console.log(PP.getTitle())
console.log(PP.getAuthor())
console.log(PP.title)
console.log(PP.author)
