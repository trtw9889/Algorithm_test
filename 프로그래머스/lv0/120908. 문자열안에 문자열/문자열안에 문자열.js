function solution(str1, str2) {
    const lower = str1.toLowerCase()
    const newLower = str2.toLowerCase()
    
    return lower.includes(newLower) === true ? 1 : 2
}