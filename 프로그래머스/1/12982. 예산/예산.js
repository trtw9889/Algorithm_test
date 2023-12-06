function solution(d, budget) {
    d.sort((a,b) => a-b)
    
    let count = 0
    let remain = budget
    
    for(let i = 0 ; d.length ; i++) {
        if(remain - d[i] >= 0) {
            remain -= d[i]
            count++
        } else break
    }
    
    return count
}