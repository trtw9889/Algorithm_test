const solution = (my_string) => {
    const gather = ["a","e","i","o","u"]
    const arr = my_string.split("") 
    const result = []
    
    arr.forEach(x => {
      if(!gather.includes(x)) {
        result.push(x)
         }
    })
    
    return result.join("")
}