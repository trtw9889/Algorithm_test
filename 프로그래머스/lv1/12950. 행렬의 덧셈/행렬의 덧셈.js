function solution(arr1, arr2) {
    return arr1.map((val,ind) => val.map((arrSum,arrInd) => arrSum + arr2[ind][arrInd]))
}