function solution(num_list) {
    const oddSum = num_list.reduce((acc,cur,ind) => {
        return ind % 2 === 1 ? acc+cur : acc
    } ,0)
    
    const evenSum = num_list.reduce((acc,cur,ind) => {
        return ind % 2 === 0 ? acc+cur : acc
    } ,0)
    
    return oddSum > evenSum ? oddSum : evenSum
}


