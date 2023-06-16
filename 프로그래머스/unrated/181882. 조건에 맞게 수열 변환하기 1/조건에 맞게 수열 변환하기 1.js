function solution(arr) {
    const result = arr.map(x => { 
   return  (x >= 50 && x % 2 == 0) ? x / 2 : 
           (x <= 50 && x % 2 == 1) ? x * 2 : x
    })
    return result
}