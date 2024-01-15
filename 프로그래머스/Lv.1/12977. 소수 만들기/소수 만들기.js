function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

function solution(nums) {
    const temp = []
     
    for(let i =0 ; i < nums.length ; i++) {
        for(let j = i+1; j < nums.length ; j++) {
            for(let k = j+1 ; k < nums.length ; k++) { 
            temp.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    const primeCount = temp.filter(isPrime).length

    return primeCount
}