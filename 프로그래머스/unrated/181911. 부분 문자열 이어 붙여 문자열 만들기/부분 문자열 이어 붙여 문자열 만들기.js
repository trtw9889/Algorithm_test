function solution(my_strings, parts) {
    return parts.reduce((acc,cur,idx) => {
        const [x,y] = cur

        acc += my_strings[idx].slice(x, y+1)
        
        return acc
        
    }, "")
}
