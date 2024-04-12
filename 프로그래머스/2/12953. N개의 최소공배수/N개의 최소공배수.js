const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);


function solution(arr) {
    let answer = arr[0]
    
    for(let i = 1 ; i < arr.length ; i++) {
        answer = lcm(answer,arr[i])    
    }
    return answer
}