function rank(array) {
    let arr = [...array].sort((a,b)=>b-a);
    // let arr = array.sort((a,b)=>b-a); 이렇게 하면 기존 array 배열도 변경되기 때문에 구조 분해할당 해줌
    var answer = [];
    for(let i = 0 ; i< array.length ; i++){
        answer.push(arr.indexOf(array[i])+1)
    }
    return answer;
}

function solution(score) {
    var answer = [];
    for(let i = 0 ; i < score.length ; i++){
        answer.push((score[i][0]+score[i][1])/2)
    }
    return rank(answer);
}

