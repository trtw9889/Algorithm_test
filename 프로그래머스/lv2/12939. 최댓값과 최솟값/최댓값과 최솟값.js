function solution(s) {
 const nums = s.split(" ").map(numStr => parseInt(numStr))
 const arr = nums.sort((a,b) => {
     return a-b
 })
 
 const firstNum = arr[0]
 const lastNum = arr[arr.length -1]

 const result = [firstNum,lastNum].join(" ")
 return result
}

