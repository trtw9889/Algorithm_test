function solution(arr) {
    const result = []
    
    for(let i=0; i < arr.length; i++){
       result.push(...Array(arr[i]).fill(arr[i]))
    }
     return result          
}