function solution(k, tangerine) {
    let countMap = new Map();

    tangerine.forEach((x) => {
        countMap.set(x, (countMap.get(x) || 0) + 1);
    });

    let sortedCounts = [...countMap.entries()].sort((a, b) => b[1] - a[1]);

    let answer = 0;

    for (let i = 0; i < sortedCounts.length; i++) {
        k -= sortedCounts[i][1];
        answer++;

        if (k <= 0) {
            break;
        }
    }

    return answer;
}