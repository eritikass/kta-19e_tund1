const fs = require('fs');

const cat1 = fs.readFileSync('cat.txt', 'utf8');

console.log('cat1', cat1);

function readFileCallback(err, data) {
    if (err) throw err;
    console.log('cat2', data);
}

readFileCallback(null, 'no cat here...');

fs.readFile('cat.txt', 'utf8', readFileCallback);

console.log('done');