function solution(a, b) {
     return a.map((num, index) => num * b[index]).reduce((acc, cur) => acc + cur, 0);
}


// 또 다른 풀이
// function solution(a, b) {
//     let result = 0
    
//     for(let i=0; i < a.length ; i++) {
//        for(let j=0; j < b.length ; j++) {
//            if( i === j) {
//                result += a[i] * b[j]
//            }
//         } 
//     }
//     return result
// }
