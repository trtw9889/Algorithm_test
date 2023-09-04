function solution(names) {
    let arr = []
    for(let i=0; i < names.length ; i += 5) {
        const result = names.slice(i,i+5)
        arr.push(result)
    }
    
   return arr.map(value => value[0] )
    
}