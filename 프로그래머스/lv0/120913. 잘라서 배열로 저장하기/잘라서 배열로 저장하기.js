function solution(my_str, n) {
    const arr = []
    
    for(let i =0 ; i < my_str.length ; i += n) {
        const result = my_str.slice(i, i+n)
        arr.push(result)
    }
    return arr
}
