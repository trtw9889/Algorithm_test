const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', function () {
    const n = input[0]; 

    for (let i = 1; i <= n; i++) {
        let stars = '*'.repeat(i); 
        console.log(stars);
    }
});