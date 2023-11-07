function solution(participant, completion) {
    participant.sort();
    completion.sort();// 주어진 선수들의 이름을 정렬
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {// 정렬된 선수들의 이름을 순차적으로 비교하여 맞지 않는 이름 출력
      return participant[i];
    }
  }
}