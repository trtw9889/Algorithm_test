function solution(number) {
    const num = number.split("").reduce((acc,cur) => acc + Number(cur) ,0)
    
    return num % 9
}