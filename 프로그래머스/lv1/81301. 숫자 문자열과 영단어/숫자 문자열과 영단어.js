function solution(s) {
    const num = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }
    
    let answer = '';
    let currentWord = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (!isNaN(char)) {
            answer += char;
        } else {
            currentWord += char;

            if (num[currentWord] !== undefined) {
                answer += num[currentWord];
                currentWord = ''; //currentWord 초기화 시키기
            }
        }
    }
    
    return parseInt(answer);
}
