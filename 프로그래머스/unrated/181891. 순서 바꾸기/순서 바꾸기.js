function solution(num_list, n) {
    return [...num_list, ...num_list].splice(n, num_list.length);
}