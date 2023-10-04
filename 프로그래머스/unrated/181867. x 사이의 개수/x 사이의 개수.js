function solution(myString) {
    const result = myString.split("x")
    return result.map(value => value.length)
}