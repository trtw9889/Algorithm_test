function solution(left, right) {
    let sum = 0
    
    for(let i=left; i<=right ;i++) {
     let arr = []
      for(let j= 1; j <= i ; j++ ) {
        if(i % j === 0) {
            arr.push(j)
        }
      }
        
     if(arr.length % 2 === 0) {
         sum += i
      } else {
         sum -=i
      }
    }
    return sum
}


//배열로 약수를 구하지 않고 숫자로 문제를 푸는 방법
// function solution(left, right) {
//     let sum = 0;

//     for (let i = left; i <= right; i++) {
//         let divisors = 0;
        
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 divisors++;
//             }
//         }

//         if (divisors % 2 === 0) {
//             sum += i;
//         } else  {
//             sum -= i
//         }
        
//     }

//     return sum;
// }