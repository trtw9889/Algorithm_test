function solution(s) {
    const words = s.split(" ")

    const result = words.map(word => {
        if (/^[a-zA-Z0-9]/.test(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    })
    return result.join(" ")
}