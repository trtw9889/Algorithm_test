function solution(s) {
    let num =  Math.floor(s.length / 2)
    
    const result = s[num]
    
    if(s.length % 2 === 0) {
     return s[num-1] + result
    }
   
    return result
}

