function solution(num_list) {
    const last = num_list[num_list.length-1]
    const secondLast = num_list[num_list.length-2]
    
    if( last > secondLast) {
        const result = last - secondLast
        num_list.push(result)
    } else {
        num_list.push(last * 2)
    }
    return num_list 
}