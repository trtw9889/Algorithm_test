function solution(my_string, s, e) {
    const arr = my_string.split("")
    const reverseStr = arr.slice(s, e+1).reverse().join("")
    
    const result = my_string.slice(0,s) + reverseStr + my_string.slice(e+1)
    
    return result
}
