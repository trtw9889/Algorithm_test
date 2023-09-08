function solution(arr1, arr2) {
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    
    if(arr1Length > arr2Length) {
        return 1
    } else if(arr1Length < arr2Length) {
        return -1
    } else {
        const arr1Sum = arr1.reduce((acc,cur) => acc+cur, 0)
        const arr2Sum = arr2.reduce((acc,cur) => acc+cur, 0)
        
        const result = arr1Sum > arr2Sum ? 1 : -1
        
        return arr1Sum === arr2Sum? 0 : result
    }
}