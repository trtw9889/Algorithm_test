const solution = (t, p) => {
    const arr = []
    const len = p.length
    
    for(let i = 0 ; i <= t.length - len ; i++) {
        const str = t.substring(i,i+len)
        arr.push(str)   
        }
    
    const result = arr.filter((val) => val <= p)
    
    return result.length
}