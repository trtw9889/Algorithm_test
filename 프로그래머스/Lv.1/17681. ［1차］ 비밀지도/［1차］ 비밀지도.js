function solution(n, arr1, arr2) {
    const answer = []

    for(let i=0; i < n ; i++) {
        const change = (arr1[i] | arr2[i]).toString(2).padStart(n,'0')

        const result = change.split("").map((i) => i ==='1'? "#" : " ").join("")
   
        answer.push(result)
    }
    return answer
}
