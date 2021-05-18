// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from('foo')); // [ 'f', 'o', 'o' ]
console.log(Array.from([1,2,3], x=>x+x)) // [2, 4, 6]

// The Array.isArray() method determines whether the passed value is an Array.

console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({foo: 123})); // false