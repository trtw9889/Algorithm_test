function solution(n) {
    let i = n + 1
    const num = n.toString(2).split("").filter((val) => val === "1")    
    
   while(true) { //다음 큰 숫자를 찾을 때까지 무한루프를 돌리고 조건이 만족하면 반복이 중지된다.
     
     const result = i.toString(2).split("").filter((val) => val === "1")

     if(num.length == result.length) {
        return i
     }
            
     i++
  }
    
}