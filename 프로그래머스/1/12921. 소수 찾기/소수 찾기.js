function solution(n) {
    if (n < 2) return 0
    let count = 0

    // 소수 판별 함수
    function isPrime(num) {
        if (num <= 1) return false // 1 이하의 수는 소수가 아님
        if (num === 2) return true // 2는 소수
        if (num % 2 === 0) return false // 짝수는 소수가 아님

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false
            }
        }

        return true
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            count++
        }
    }

    return count
}
