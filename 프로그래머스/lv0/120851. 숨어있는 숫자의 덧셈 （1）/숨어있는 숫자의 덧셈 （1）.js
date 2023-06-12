function solution(my_string) {
    let num = 0
    const arr = [...my_string].map(v => { //구조 분해 할당을 활용하여 문자열을 배열로 만들었음.
    if(isNaN(v) === false) {
        num += parseInt(v) 
        // isNaN()을 활용하여 숫자인지를 판별하고 parseInt를 활용하여 v를 number로 만들어 값을 더해줌
         }    
    })
    return num
}



