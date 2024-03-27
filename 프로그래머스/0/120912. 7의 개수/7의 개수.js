function solution(array) {
    let arr = []
    
    array.forEach((val) => {
        let num = val.toString().split("").map(Number)
        arr = arr.concat(num)
    })
    
    const result = arr.filter((val) => val === 7)
    
    return result.length
    
}
