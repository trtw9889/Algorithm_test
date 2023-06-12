function solution(my_string, n) {
    const arr = my_string.split("") // 배열로 변환하여 문자열을 하나하나 쪼개는데 활용
    let result = ""
    
    for(let i=0; i<arr.length ; i++ ) {
    result += arr[i].repeat(n)  
    //repeat()를 활용하여 문자열을 반복하고 반복한 값을 result값에 넣음으로서 출력값을 만들었음.
   
    }
    return result
}