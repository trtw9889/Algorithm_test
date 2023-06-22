const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    const result = number(n); // number(n) 함수 호출의 반환 값을 result라는 변수에 할당
    console.log(result);
});

const number = (n) => {
    if (n % 2 === 1 ) {
      return n + " is odd"
    } else {
      return n + " is even"
    }
}
