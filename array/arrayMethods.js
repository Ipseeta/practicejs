// 8 methods of array

//1.  forEach
[1, 2, 3].forEach((data, index) => {
    console.log(data, index);
});
// 1 0
// 2 1
// 3 2

//2. map
const three = [1, 2, 3];
const doubled = three.map((item) => {
    return item * 2;
});
console.log(doubled);// [ 2, 4, 6 ]

//3. filter
const ints = [1, 2, 3];
const evens = ints.filter((item) => {
    return item % 2 === 0;
});
console.log(evens);// [ 2 ]

//4. reduce
const sum = [1, 2, 3].reduce((res, item) => {
    return res + item;
}, 1); // res = 1 
console.log(sum);// 7

//5. some
const hasNegNums = [0, -2, 4, 5, -3, 1].some((item) => {
    return item < 0;
});
console.log(hasNegNums); // true

//6. every
const hasPosNums = [0, -2, 4, 5, -3, 1].every((item) => {
    return item > 0;
});
console.log(hasPosNums); // false

//7. find 
const objects = [{id : 'a'}, {id: 'b'}, {id: 'c'}];
const find = objects.find((item) => {
    return item.id === 'b';
});
console.log(find);// { id: 'b' }

//8. find index
const foundIndex = objects.findIndex((item) => {
    return item.id === 'b';
});
console.log(foundIndex);// 1
