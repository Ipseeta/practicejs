const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); //[3, 42, 'foo']
});

const promise4 = new Promise((resolve, reject) => {
  reject(new Error('reject'));
});
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
}).catch(error => {
  console.error(error.message) // reject
});

//Promise.all waits for all promises to be resolved or for any to be rejected. 
//Promise.all waits for all fulfillments (or the first rejection).