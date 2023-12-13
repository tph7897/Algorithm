function solution(progresses, speeds) {
    var answer = [];
    let finish = 0;
    let count = 0;
    progresses = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
    while (finish < progresses.length) {
        
        progresses = progresses.map((e) => --e);
        while (progresses[finish] <= 0) {
            count++;
            finish++;
            if (finish >= progresses.length) {
                break;
            }
        }
        if (count > 0) {
            answer.push(count);
            count = 0;
        }

    }
    return answer;
}