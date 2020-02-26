var jaIssa = [1,32,5,67,8,8,89,9,99,4];
var sum = 0;
for(var i= 0; i<jaIssa.length; i++){
    var check = jaIssa[i];
    sum = sum+check;
}
console.log(sum)

function arraySome(num){
    var sum = 0;
    for(var i= 0; i<jaIssa.length; i++){
        var check = jaIssa[i];
        sum = sum+check;
    }
    return sum;
}
var num = [1,32,5,67,8,8,89,9,99,4];
var result = arraySome(num);
console.log(result);