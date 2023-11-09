function solution(citations) {
    // 반환할 H-Index 값을 저장하는 변수
    let answer = 0;
    // 현재까지 확인한 논문의 수를 나타내는 변수
    let count = 0;
    // 논문의 인용 횟수를 내림차순으로 정렬
    citations.sort((a, b) => b - a);
    // 모든 논문을 확인하면서 H-Index 계산
    for (let i = 0; i < citations.length; i++) {
        // 현재까지 확인한 논문의 수를 증가
        count++;
        // 현재 논문의 인용 횟수가 현재까지 확인한 논문의 수보다 작으면 반복 종료
        if (citations[i] < count) {
            count--
            break;
            
        }
        // // H-Index 값을 증가
        // answer++;
    }
    // 최종적으로 계산된 H-Index 반환
    return count;
}