function solution(order) {
    const arr = String(order).split("")
   const result = arr.filter(val => val === '3' || val === '6' || val === '9')
   
   return result.length
}