function solution(x) {
    const str = String(x)
    const mapfn = (arg) => Number(arg)
    const arr = Array.from(str, mapfn)
    
    const result = arr.reduce((acc,cur) => acc + cur)
    
    return x % result == 0 ? true : false 
}