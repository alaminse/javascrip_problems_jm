var business = 200;
var minester = 160;
var sochib = 100;
if(minester>business){
    if(minester>sochib){
        console.log("minester is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}
else{
    if(business>sochib){
        console.log("business is bigger");
    }
    else{
        console.log("sochib is bigger");
    }
}

var max = Math.max(business,minester,sochib);
console.log(max)