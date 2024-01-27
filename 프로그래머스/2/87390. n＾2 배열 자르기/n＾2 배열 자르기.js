function solution(n, left, right) {
    const answer = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        const maxValue = Math.max(row, col);
        answer.push(maxValue + 1);
    }
    return answer;
}