const solution = (n) => {
    const arr = n.toString().split("").map(x => Number(x))
    
    return arr.reduce((acc,cur) => acc + cur)
}

// 정수인 n을 문자열로 바꾼뒤 하나의 인덱스로 쪼개고 map을 돌려 숫자로 타입을 변환.
// 배열안에 담긴 숫자가 되었으니 reduce를 활용하여 숫자의 합을 반환.
