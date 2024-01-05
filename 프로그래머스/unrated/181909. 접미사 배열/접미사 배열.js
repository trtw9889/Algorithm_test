function solution(my_string) {
   const result = []
   
   for(let i = 0; i < my_string.length ; i++) {
       const arr = my_string.substring(i)
       result.push(arr)
   } 
    return result.sort()
   
}