function solution(priorities, location) {
    let answer = 0;
    while (answer < priorities.length) {
        let foundAnswer = false;

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
        if (foundAnswer) {
            break;
        }
    }

    return answer;
}
