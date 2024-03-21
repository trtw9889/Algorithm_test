function solution(array, n) {
    const result = array.map((val) => [Math.abs(val-n), val])
    
    result.sort((a,b) => a[0]- b[0] || a[1] - b[1])

    return result[0][1] 

}