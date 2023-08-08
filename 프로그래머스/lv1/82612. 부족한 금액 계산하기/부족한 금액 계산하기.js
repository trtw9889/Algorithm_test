function solution(price, money, count) {
    if (price < 1 || price > 2500) {
        return "놀이기구의 이용료는 1 이상 2500 이하의 자연수여야 합니다.";
    }
    
    if (money < 1 || money > 1000000000) {
        return "보유 금액은 1 이상 1000000000 이하의 자연수여야 합니다.";
    }
    
    if (count < 1 || count > 2500) {
        return "이용 횟수는 1 이상 2500 이하의 자연수여야 합니다.";
    }
    
    
    let result = 0
    for(let i =1 ; i<= count ; i++) {
        result += i * price
    }
    
     return result > money  ? result - money : 0 
}