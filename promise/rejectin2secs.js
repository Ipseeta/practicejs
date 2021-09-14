require('isomorphic-fetch');

function callFetch() {
    return new Promise((resolve, reject) => {
        fetch('https://ipseeta.me')
        .then(data => resolve(data.status))
        .catch(err => reject(err));
    });
}

function callReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("request timed-out after 2secs"));
        }, 10);
    });
}

async function requestWithTimeout() {
    try {
        const response = await Promise.race(
            [callReject(), callFetch()]
        );
        console.log(response);

    } catch (error) {
        console.log(error.message);
    }
}

requestWithTimeout();
