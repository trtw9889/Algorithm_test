function solution(numbers, direction) {
    if(direction === "right") {
      const last = numbers.pop()
      numbers.unshift(last)

      return numbers
        
    } else if(direction === "left") {
        const first = numbers.shift()
        numbers.push(first)
        
        return numbers
    }
    
}