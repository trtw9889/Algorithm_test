function solution(number) {
    number.sort((a,b) => a-b)
    let arr = []
    
    for(let i =0; i< number.length ; i++){
        for(let j = i+1; j<number.length ; j++) {
              for(let k = j+1; k<number.length ; k++) {
            arr.push(number[i] + number[j] + number[k])
        }
      }
    }
    const result =arr.filter((val) => val === 0)
    return result.length
}