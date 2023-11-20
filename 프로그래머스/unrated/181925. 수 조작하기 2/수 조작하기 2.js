function solution(numLog) {
    let n = numLog[0]
    let result = ""
    
    for(let i = 1; i < numLog.length; i++) { 
        const str = numLog[i];
   
        if(n + 1 === str) {
            result += "w"
        } else if( n - 1 === str) {
            result += "s"
        } else if( n  +10 === str) {
            result += "d"
        } else if( n - 10 === str) {
            result += "a"
        }
        
        n = str
    }
    
  return result
}
