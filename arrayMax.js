var jaIssa = [1,32,5,67,8,8,89,9,99,4];
var max = jaIssa[0];
for(var i= 0; i<jaIssa.length; i++){
    var check = jaIssa[i];
    if(check>max){
        max = check;
    }
}
console.log(max)