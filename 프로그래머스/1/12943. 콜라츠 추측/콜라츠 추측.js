function solution(num) {
    let arr = []
    
    if(num === 1) {
        return 0
    }
    
    while(num > 0) {
        arr.push(num)
        
        if(num === 1) break 
        
        if(num % 2 === 0) {
            num = num / 2
        } 
        else if(num % 2 === 1){
            num = 3 * num + 1 
        }
    }
    return arr.length > 500 ? -1 : arr.length-1
}

