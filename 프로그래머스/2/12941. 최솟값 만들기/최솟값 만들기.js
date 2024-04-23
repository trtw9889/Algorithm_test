function solution(A,B){
    const arrA = A.sort((a,b) => a - b)
    const arrB = B.sort((a,b) => b - a)
    let num = 0
    
    const result = arrA.map((val, ind) => {
        num += val * arrB[ind]
        return num
    })
    
    return num
}