function solution(myString, pat) {
    let newStr = [...myString]

    for(let i =0 ; i < newStr.length; i++) {
    if(newStr[i] === "A") {
        newStr[i] = "B"
    } else if (newStr[i] === "B"){
        newStr[i] = "A"
    } 
        
  }
    return newStr.join("").includes(pat) === true ? 1 : 0
}

