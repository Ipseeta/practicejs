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
const promise5 = new Promise((resolve, reject) => {
  reject(new Error('reject5'));
});
Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then((values) => {
  console.log(values);
}).catch(error => {
  console.error(error.message) // reject
});

//Wait until all promises have settled(resolved or rejected)
// here all the status with its values will come