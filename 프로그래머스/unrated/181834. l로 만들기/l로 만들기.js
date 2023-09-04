function solution(myString) {
    return myString.split("").map(value => value < "l" ? "l" : value).join("")
}