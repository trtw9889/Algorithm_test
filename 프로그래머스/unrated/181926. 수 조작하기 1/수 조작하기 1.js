function solution(n, control) {
    let result = n;

    for(let i = 0; i < control.length; i++) {
        const str = control[i];
        
        if (str === "w") {
            result += 1;
        } if (str === "s") {
            result -= 1;
        } if (str === "d") {
            result += 10;
        } if (str === "a") {
            result -= 10;
        }
    }
    return result;
}


