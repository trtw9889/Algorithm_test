function solution(array, commands) {
    
    const num = commands.map((val)  => {
        const result = array.slice(val[0] - 1, val[1]).sort((a,b) => a-b)
        const numVal = val[2]
        
        return result[numVal-1]
    })
     return num
}


