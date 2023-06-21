function solution(n) {
    let arr = []
    
    for(let i = 1 ; i <= n ; i++){
    const odd = i % 2
    
     if( odd === 1) {
        arr.push(i)
     }
  }
    return arr
}