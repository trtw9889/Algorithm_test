function solution(my_string) {
    const str = my_string.split("")
    
    const result = str.filter((val,idx) => {
        return str.indexOf(val) === idx
    }).join("")
    
    return result
}
