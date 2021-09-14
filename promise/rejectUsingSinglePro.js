require('isomorphic-fetch');
function timeout(promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Timedout')
        }, 1000)
        promise.then(resolve, reject);
    });
}

timeout(fetch('https://ipseeta.me'))
    .then(function (response) {
        console.log(response.status);
    }).catch(function (error) {
        console.log(error);
    });
