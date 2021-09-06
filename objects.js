var myDog= {
    "name": "Toto",
    "tails": 1,
    "ears": 2,
    "legs": 4
};

console.log(myDog);
delete myDog['ears'];
console.log(myDog);

var myObj = {
    "name": "Ipseeta",
    "dob": "1992",
    "gender": "female"
};

function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("name"));
console.log(checkObj("age"));

