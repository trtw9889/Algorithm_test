function solution(sizes) {
    let maxW = 0
    let maxH = 0
    
    for(const size of sizes) {
    maxW = Math.max(maxW, Math.max(size[0],size[1]))
    maxH = Math.max(maxH, Math.min(size[0],size[1]))

    }
    return maxW * maxH
}