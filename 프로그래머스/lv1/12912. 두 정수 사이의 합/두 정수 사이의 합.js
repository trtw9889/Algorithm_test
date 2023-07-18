function solution(a, b) {
    let sum = 0
    
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    if( min !== max ) {
    for (let i = min; i <= max; i++) {
       sum += i;
    }
    return sum;
 }
    return a || b
}