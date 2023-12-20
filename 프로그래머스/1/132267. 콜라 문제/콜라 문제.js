function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const count = Math.floor(n / a);
        n -= count * a;
        n += count * b;
        answer += count * b;
    }
    return answer;
}