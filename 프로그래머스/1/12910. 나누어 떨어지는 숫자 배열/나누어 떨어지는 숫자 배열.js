function solution(arr, divisor) {
    const newArr = arr.filter(val => val % divisor === 0).sort((a,b) => a-b)

    return newArr.length === 0 ? [-1] : newArr
}