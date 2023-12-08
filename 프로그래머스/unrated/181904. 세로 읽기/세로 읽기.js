function solution(my_string, m, c) {
    const arr = my_string.split("")
    let result = []
    
    for(let i = 0; i < arr.length ; i += m ) {
        arr.slice(i,i+m)
        result.push(arr[i+c-1])
    }
    
    return result.join("")
}