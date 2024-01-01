function solution(n, a, b) {
    let answer = 0;
    while (a !== b) {
        a = a % 2 ? (a + 1) / 2 : a / 2;
        b = b % 2 ? (b + 1) / 2 : b / 2;
        answer++;
    }
    return answer;
}