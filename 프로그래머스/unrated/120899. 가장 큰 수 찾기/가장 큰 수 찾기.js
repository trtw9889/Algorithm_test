function solution(array) {
    const result = Math.max(...array)
    const ind = array.indexOf(result)
    
    return [result,ind]
    
}