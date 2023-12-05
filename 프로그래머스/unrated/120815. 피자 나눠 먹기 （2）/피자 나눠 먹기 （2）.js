function solution(n) {
    let result = 1
    
    while(true) {
        if((result % n === 0) && (result % 6 === 0)) break
        result++
    }
    return result / 6
}