function solution(i, j, k) {
    let arr = []
    
    for(let a = i ; a <= j ; a++) {
        arr.push(a + "")
    }
    
    const result = arr.map((val) => {
        if(val.length >= 2) {
            return val.split("")
        } else {
            return val
        }
    })
   
    const final = result.flat().map((val) => Number(val)).filter((val) => val === k)
    
    return final.length
}