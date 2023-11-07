function solution(prices) {
    const answer = []
    for (let i = 0; i < prices.length; i++) {
        let num = 0;  // 주식 가격이 유지된 기간
        // 현재 주식가격과 이후 주식가격 비교
        for (let j = i + 1; j < prices.length; j++) {
            num++;  // 유지기간 증가
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(num);
    }
    return answer
}