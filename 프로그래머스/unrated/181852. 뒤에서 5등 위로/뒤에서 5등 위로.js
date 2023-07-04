function solution(num_list) {
    let arr = []
    const result = num_list.sort((a,b) =>{
        return a-b
    })
    
    for(let i=5;i<num_list.length;i++){
    arr.push(result[i])
    }
    return arr
}