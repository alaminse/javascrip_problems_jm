var a=1;
var b=2;
console.log("after swap:", a, b)

var temp = a;
a=b;
b= temp;
console.log("befor swap: ",a,b)

var x = 5;
var y = 7;
x = x+y;
y = x-y;
x = x-y;
console.log(x,y)

var p=4;
var q=5;
[p,q] = [q,p];
console.log(p,q)