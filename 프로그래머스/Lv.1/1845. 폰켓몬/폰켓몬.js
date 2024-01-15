function solution(nums) {
    //방법1
    const answer = new Set(nums)
    const result = nums.length / 2

    return Math.min(answer.size , result)
    
    //방법2
//     const answer = []
    
//     for(let i=0; i<nums.length ; i++) {
//         if(nums[i] !== nums[i+1]) {
//           answer.push(nums[i])
//         }
//     }
   
//     if(answer.length=== nums.length) {
//         return answer.length / 2
//     } 
//     return answer.length
}