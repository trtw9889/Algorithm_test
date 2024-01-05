function solution(s) {
    let count = 0
    let zeroRemoved = 0
    
    while(s !== "1") {
       const removed =  s.split('0').length - 1
       zeroRemoved += removed
        
       s = (s.length - removed).toString(2)
       count++
    }
      return [count, zeroRemoved]
}