require('isomorphic-fetch');

const timeout = () => {
    return new Promise(async function(resolve, reject) {
        const timer = setTimeout(() => reject('Timedout'), 2000);
        const response = await fetch('https://ipseeta.me');
        clearTimeout(timer);
        resolve(response.status);
    });
}
timeout().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});