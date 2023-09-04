function solution(my_string) {
    return my_string.split("").map(x => parseInt(x)).filter(num => !isNaN(num))
           .sort((a,b) => a-b)
}