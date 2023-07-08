function solution(myString) {
 return myString.split("").map(char => {
     if( char === "a" || char === "A" ) {
        return char.toUpperCase()
     }
     return char.toLowerCase()
 }).join("")
}