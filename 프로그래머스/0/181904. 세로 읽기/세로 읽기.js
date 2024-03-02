function solution(my_string, m, c) {
    return [...my_string].filter((e,i)=> i % m == c - 1).join('');
}