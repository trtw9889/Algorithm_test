function solution(participant, completion) {
    const sortedCompletion = completion.sort()
    const answer = participant.sort().find((el,ind) => el !== completion[ind])
   
    return answer
}