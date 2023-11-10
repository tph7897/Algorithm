function solution(k, dungeons) {
  let answer = 0;
  const visited = new Array(dungeons.length).fill(0)
  function quest(Fatigue, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i] === 0 && dungeons[i][0] <= Fatigue) {
        visited[i] = 1;
        quest(Fatigue- dungeons[i][1], count + 1);
        visited[i] = 0;
      }
    }
    answer = Math.max(answer, count);
  }
  quest(k, 0);
  return answer;
}