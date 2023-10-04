function solution(cipher, code) {
    return cipher.split("").filter((vaule, indx) => (indx + 1) % code === 0).join("")
}