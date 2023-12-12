function solution(priorities, location) {
    let answer = 0;
    let foundAnswer = false;
    while (!foundAnswer) {
        for (let i = 0; i < priorities.length; i++) {
            if (priorities[i] === Math.max(...priorities)) {
                answer++;
                priorities[i] = 0;
                if (i === location) {
                    foundAnswer = true;
                    break;
                }
            }
            // console.log(priorities);
        }
    }
    return answer;
}
