function localScope() {
    var myLocal = 5;
    console.log(myLocal);
}
localScope();
console.log(myLocal); // ReferenceError: myLocal is not defined