function solution(arr, n) {
    if(arr.length % 2 === 1) {
         const oddRes = arr.map((value,ind) => {
            if(ind % 2 === 0) {
                return value + n
            }
             return value
        })
       return oddRes
    } else {
        const evenRes = arr.map((value,ind) => {
            if(ind % 2 === 1) {
                return value + n
            }
             return value
        })
       return evenRes
    }
}
