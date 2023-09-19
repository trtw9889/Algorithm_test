function solution(a, b) {
    const firstSum = String(a) + String(b)
    const secondSum = String(b) +String(a)
    
    return Number(firstSum) > Number(secondSum) ? Number(firstSum) : Number(secondSum)
}