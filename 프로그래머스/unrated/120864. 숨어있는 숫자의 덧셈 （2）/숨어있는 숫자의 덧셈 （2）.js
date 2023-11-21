function solution(my_string) {
    const str = my_string.match(/\d+/g)
    
    if (!str) {
        return 0
    }
    
    return str.reduce((acc,cur) => acc + parseInt(cur) ,0)
}