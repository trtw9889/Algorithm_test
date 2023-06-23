function solution(numbers, n) {
    const result = numbers.reduce((acc,cur) => {
     if(acc > n) {
        return acc
      }
        return acc + cur
    })
    return result
}
