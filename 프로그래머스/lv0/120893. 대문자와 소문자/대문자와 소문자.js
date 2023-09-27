function solution(my_string) {
    const arr = []
    
    for (const str of my_string) {
        if(str === str.toUpperCase()) {
            arr.push(str.toLowerCase())
        } else {
            arr.push(str.toUpperCase())
        }
    }
    return arr.join("")
}

