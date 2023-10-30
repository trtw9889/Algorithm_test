function solution(hp) {
   const remain = hp % 5
   const addRemain = remain % 3
   const general = Math.floor(hp / 5)
   const seniorSolider = Math.floor(remain / 3)
   const solider = Math.floor(addRemain / 1)
   
    if (remain) {
        return (addRemain % 3 === 0) ? seniorSolider + general : seniorSolider + general + solider
    } else {
        return general
    }
}
