function solution(arr) {
    const result =  arr.reduce((acc,cur) => acc+cur)
    return result / arr.length
}