function solution(emergency) {
    const arr = emergency.slice().sort((a,b) => b-a)
    let result = []

    for(let i = 0; i< emergency.length;i++) {
       let index = arr.indexOf(emergency[i]) +1
       result.push(index)
    }
    return result
}


    
    
    