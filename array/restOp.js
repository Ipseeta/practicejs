const add = (function(){
    return function sum(...args) {
        return args.reduce((a, b) => a + b);
    };
})();
console.log(add(1,2,3));