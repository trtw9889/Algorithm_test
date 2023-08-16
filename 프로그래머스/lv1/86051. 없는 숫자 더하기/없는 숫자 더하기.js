function solution(numbers) {
    const arr = [...Array(10).keys()]
    
    const result = arr.filter(num => !numbers.includes(num)).reduce((acc,cur) => acc+cur)
    
    return result
}