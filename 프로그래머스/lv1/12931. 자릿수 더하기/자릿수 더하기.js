function solution(n) {
    const str = n.toString()
    const arr = [...str]
   
    const num = arr.map(x => parseInt(x))
    const result =  num.reduce((acc,cur) => acc+cur)
    
    return result
}