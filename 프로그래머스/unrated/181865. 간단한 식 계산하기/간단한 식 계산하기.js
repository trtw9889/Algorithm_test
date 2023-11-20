const solution = (binomial) => {
    const num = binomial.split(" ")
    const a = Number(num[0])
    const b = Number(num[2])
    
    const op = num[1]
    let result = 0
    
    switch (op) {
        case '+' :
            result = a+b
            break
        case '-' :
            result = a-b
            break
        case '*' :
            result = a*b
            break
    }
    
    return result

}