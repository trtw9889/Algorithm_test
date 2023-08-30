function solution(arr) {
    if(arr.length === 1) return [-1]
    
    const minIndex = Math.min(...arr)
    
    return arr.filter(value => value !== minIndex)
}