var myGlobal = 10;
function func1() {
    var oopsGlobal = 5;
}
function func2() {
    var output = "";
    console.log(typeof myGlobal);
    if (typeof myGlobal != "undefined") {
        output += "myGlobal = " + myGlobal;
    }
    console.log(typeof oopsGlobal);
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal = " + oopsGlobal;
    }
    console.log(output);
}
func1();
func2();