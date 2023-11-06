function solution(rsp) {
    let output = ""
    
    for(let i=0 ; i < rsp.length ;i++) {
    if(rsp[i] === "2") {
       output += "0" 
    } else if(rsp[i] === "0") {
        output += "5"
    } else if(rsp[i] === "5") {
        output += "2"
    } 
  }
    
    return output
}

