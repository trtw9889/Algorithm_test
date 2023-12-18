function solution(x, n) {
    let result = []
    
    for(let i=0 ; i < n ; i++) {
        result.push(x + i * x)
    }
    
    return result
}