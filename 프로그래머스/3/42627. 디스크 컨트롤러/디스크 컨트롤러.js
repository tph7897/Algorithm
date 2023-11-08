function solution(jobs) {
    // 초기화
    let j = 0; // jobs 배열의 인덱스를 가리키는 변수
    let time = 0; // 현재 시간
    let sum = 0; // 작업 완료까지 걸린 시간의 합
    let priorityQueue = []; // 우선순위 큐 (작업을 우선순위에 따라 정렬하는 배열)
    
    // 작업을 요청 시간 (jobs 배열의 첫 번째 요소)에 따라 정렬
    jobs.sort((a, b) => a[0] - b[0]);

    // jobs 배열의 모든 작업이 처리될 때까지 반복
    while (jobs.length > j || priorityQueue.length !== 0) {
        // 만약 아직 처리하지 않은 작업이 있고, 현재 시간이 해당 작업의 요청 시간 이후일 때
        if (jobs.length > j && time >= jobs[j][0]) {
            // 현재 작업을 우선순위 큐에 추가하고 작업의 실행 시간을 기준으로 정렬
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a, b) => {
                return a[1] - b[1];
            });
            continue; // 다음 반복으로 진행
        }
        
        // 우선순위 큐에 작업이 있을 때
        if (priorityQueue.length !== 0) {
            // 가장 우선순위가 높은 작업을 수행
            time += priorityQueue[0][1];
            // 해당 작업의 대기 시간을 누적
            sum += time - priorityQueue[0][0];
            // 작업을 큐에서 제거
            priorityQueue.shift();
        } else {
            // 우선순위 큐가 비어있을 때, 대기 시간 없이 다음 작업을 시작
            time = jobs[j][0];
        }
    }

    // 평균 대기 시간을 계산하고 소수점 아래 버림
    return Math.floor(sum / jobs.length);
}