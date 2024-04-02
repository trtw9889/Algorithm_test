function solution(n) {
    let answer = 0
    
    for(let i = 1 ; i <= n ; i++) {
     let result = 0
      let num = i //첫번째 for문이 다 끝나고 나면 2부터 시작하는 덧셈이 시작해야하기 때문에 i를 할당.
      
        while(result < n) {
          result += num
          num +=1
        }

       if(result == n) {
          answer +=1
       }
    }
    return answer
}



