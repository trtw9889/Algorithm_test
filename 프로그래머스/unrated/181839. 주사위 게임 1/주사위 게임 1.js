function solution(a, b) {
    if((a % 2 === 1) && (b % 2 === 1)){
        return a*a + b*b
    } else if((a % 2 === 1) || (b % 2 === 1)){
        return 2 * (a+b)
    } else if((a % 2 !== 1) || (b % 2 !== 1)) {
        return Math.abs(a-b) //절대값을 표현하기 위해서 메서드 사용
    }
}
