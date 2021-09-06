var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2],[3, 4, 5]));

//Rewriting to arrow func  

 const myConcatArrow = (arr1, arr2) => arr1.concat(arr2);

 console.log(myConcatArrow([1, 2],[3, 4, 5]));
