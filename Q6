var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//Output:-
"bar"
"bar"
undefined
"bar"
Explanation:-
This is basically a scope game. Here func belongs to myObject ,and if we want to access the elements of object we use this function, like this.foo(foo variable belongs to myObject).
.And var self=this;(means we assigning value to self variable, if we wouln't have assigned it,then second inner function to invoking function ,would also be undefined)
DOUBT:-
What i think is self and this are the same ,why did you use it twice?
console.log("outer func:  this.foo = " + this.foo);
console.log("outer func:  self.foo = " + self.foo);
if they are different ,then how?
