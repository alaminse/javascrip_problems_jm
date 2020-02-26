var num = 2.100;
var result = Math.ceil(num);
var result1 = Math.floor(num);
var result2 = Math.round(num);
console.log(result);
console.log(result1);
console.log(result2);

console.log("randome number:");
for(var i = 0;i<10; i++){
    var randomNumber = Math.random()*6;
    var output = Math.round(randomNumber);
    console.log(output)
}