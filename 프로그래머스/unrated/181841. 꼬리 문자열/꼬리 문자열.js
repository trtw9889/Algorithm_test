function solution(str_list, ex) {
    let arr = []
    const str = str_list.map(x => x.includes(ex))
    
    for(let i=0; i<str.length;i++) {
        str[i] === false ? arr.push(str_list[i]) : ""
    }
    
    return arr.join("")
}