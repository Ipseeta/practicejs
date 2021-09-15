const fs = require('fs');

const read = () => {
    return new Promise(function (resolve, reject) {
        fs.readFile('read.txt', 'utf8', function (err, data) {
            if (err) reject(err);
            else resolve(data);
        });
    });
}
// read().then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });
// or
(async () => {
    try {
        const response = await read();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();
