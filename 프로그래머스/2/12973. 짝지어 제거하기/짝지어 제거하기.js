function solution(s) {
    let stack = []
    const str = s.split("")

    for( let i = 0; i < str.length; i++) {
        if(stack[stack.length -1] === str[i]) { 
            // 처음은 stack이 비어있으니깐 빈배열과 문자 b와의 비교로 시작한다. 
            // "stack.length -1" 인 이유는 스텍의 LIFO의 특징을 활용하기 위해서이다.
            stack.pop()
        } else {
           stack.push(str[i])
        }
    }
    
    return stack.length === 0 ? 1 : 0
}