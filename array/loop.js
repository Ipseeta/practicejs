var myArray = [];
for(let i=1 ; i<6; i++) {
    myArray.push(i);
}
console.log(myArray);

var arr1 = [1, 2, 3, 4, 5];
var total = 0;
for(let i=0; i<5;i++){
    total += arr1[i];
}
console.log(total);

function checkScope() {
    //var globalVar = 0;
    {
        var globalVar=0;
    }
    console.log(globalVar)
}
checkScope();
//console.log(globalVar);