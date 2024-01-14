function solution(s) {
    const words = s.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                result += word[j].toUpperCase();
            } else {
                result += word[j].toLowerCase();
            }
        }
        // 단어 사이에 공백 추가
        if (i < words.length - 1) {
            result += " ";
        }
    }
    return result
}