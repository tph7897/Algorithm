function solution(dartResult) {
  let scores = [];
  let currentScore = "";
  
  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];
    
    if (!isNaN(char)) { // 숫자인 경우
      currentScore += char;
    } else if (char === "S" || char === "D" || char === "T") { // Single, Double, Triple
      scores.push(Math.pow(parseInt(currentScore), getMultiplier(char)));
      currentScore = "";
    } else if (char === "*" || char === "#") { // 스타상, 아차상
      applyBonus(scores, char);
    }
  }
  
  return scores.reduce((acc, val) => acc + val, 0);
}

function getMultiplier(char) {
  if (char === "S") {
    return 1;
  } else if (char === "D") {
    return 2;
  } else if (char === "T") {
    return 3;
  }
}

function applyBonus(scores, bonus) {
  const lastScoreIndex = scores.length - 1;
  
  if (bonus === "*") {
    scores[lastScoreIndex] *= 2;
    
    if (lastScoreIndex > 0) {
      scores[lastScoreIndex - 1] *= 2;
    }
  } else if (bonus === "#") {
    scores[lastScoreIndex] *= -1;
  }
}
