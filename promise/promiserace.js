const promise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 500, 'two');
});
const promise2 = new Promise((resolve, reject)=> {
    setTimeout(reject, 100, 'one');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log('Value', value);
}).catch((err)=>{
    console.log('Failed', err);
});

/**
 * 
 * Wait until any of the promises is resolved or rejected.
If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.
If it rejects, it is rejected with the reason from the first promise that was rejected.
 */

//Since Only promise1 is fulfilled, but promise2 is faster we get "Failed one" as o/p.