function solution(num_list) {
    const a = num_list.at(-1)
    const b = num_list.at(-2)
    a > b ? num_list.push(a-b) : num_list.push(a*2)
    return num_list;
}