function solution(n) {
    const result = n.toString(3).split("").reverse().join("")
    return parseInt(result,3)
}