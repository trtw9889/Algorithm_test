function solution(num_list, n) {
    let answer = []
    
    for(let i=0; i <num_list.length; i+= n) {
        const arr = num_list.slice(i,n+i)
        answer.push(arr)
    }
   return answer
}