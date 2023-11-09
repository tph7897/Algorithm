function solution(citations) {
    let count = 0; // 현재까지 확인한 논문의 수를 나타내는 변수
    citations.sort((a, b) => b - a); // 논문의 인용 횟수를 내림차순으로 정렬
    for (let i = 0; i < citations.length; i++) { // 모든 논문을 확인하면서 H-Index 계산
        count++; // 현재까지 확인한 논문의 수를 증가
        if (citations[i] < count) { // 현재 논문의 인용 횟수가 현재까지 확인한 논문의 수보다 작으면 반복 종료
            count--; // 현재까지 확인한 논문의 수를 감소시키고 반복 종료
            break;
        }
    }
    return count; // 최종적으로 계산된 H-Index 반환
}