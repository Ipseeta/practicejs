// Read sequentially the content for given array of files
const fs = require('fs');
const files = [
    '0.txt',
    '1.txt',
    '2.txt',
    '3.txt',
    '4.txt'];

const readFromFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`files/${file}`, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}

// (async () => {
//     try {
//         const response = await Promise.all(files.map(file => readFromFile(file)));
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// })(); 
// or w/o Promise.all
(async () => {
    let result = [];
    for (let i = 0; i < files.length; i++) {
        try {
            const response = await readFromFile(files[i]);
            result.push(response);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(result);
})();