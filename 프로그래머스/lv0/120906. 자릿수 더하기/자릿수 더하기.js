const solution = (n) => {
    const arr = n.toString().split("").map(x => Number(x))
    
    return arr.reduce((acc,cur) => acc + cur)
}