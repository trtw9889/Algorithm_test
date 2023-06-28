function solution(my_string, alp) {
    const arr = [...my_string]

    const result = arr.map(x => {
        if(x == alp) {
         return x.toUpperCase()
        } 
        return x
    })
    return result.join("")
}