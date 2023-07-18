function solution(n) {
  if(n <= 0) return 0
      
  let arr= []  
  
  for(let i=1; i <= n ; i++) {
    if(n % i === 0) arr.push(i)
  }
  
  return arr.reduce((acc,cur) => acc + cur) 
    
}