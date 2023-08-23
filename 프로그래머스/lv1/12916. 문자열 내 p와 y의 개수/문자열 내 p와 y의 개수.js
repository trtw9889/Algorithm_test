function solution(s){
    const arr =s.toLowerCase().split("")
    const pResult = arr.filter(x => x === "p").length
    const yResult = arr.filter(x => x === "y").length
    
    if(pResult === 0 || yResult === 0) true
    
    return pResult === yResult ? true : false 
}