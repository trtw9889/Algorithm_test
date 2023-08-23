function solution(n) {
    const str = String(n)
    const arr = str.split("")
    
    return Number(arr.sort((a,b) => b-a).join(""))

}