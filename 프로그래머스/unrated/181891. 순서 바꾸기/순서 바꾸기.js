function solution(num_list, n) {
    const arr = num_list.slice(n)
    const sliceArr = num_list.slice(0,n)

    return [...arr, ...sliceArr]
}