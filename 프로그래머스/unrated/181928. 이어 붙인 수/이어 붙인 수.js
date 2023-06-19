const solution = num_list => {
    const odd = num_list.filter(x => x % 2 == 1).join("") // 조건문을 사용하지 않고 filter 메서드를 활용.
    const even = num_list.filter(y => y % 2 == 0).join("")

    return Number(odd) + Number(even)
}