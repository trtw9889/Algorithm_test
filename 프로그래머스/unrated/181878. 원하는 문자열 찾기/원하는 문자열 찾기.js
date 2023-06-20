function solution(myString, pat) {
    const upper = pat.toUpperCase()
    const upperStr = myString.toUpperCase()
    
    return upperStr.includes(upper) === true ? 1 : 0
}