function solution(brown, yellow) {
    const sum = brown + yellow;
    const maxNum = Math.floor(Math.sqrt(sum));

    for (let i = 3; i <= maxNum; i++) {
        if (sum % i === 0) {
            const width = sum / i;
            const height = i;

            if (((width - 2) * (height - 2)) === yellow) {
                return [width, height];
            }
        }
    }
}
