function solution(emergency) {
    let arr = [...emergency].sort((a,b)=>b-a);
    // let arr = emergency.sort((a,b)=>b-a); 이렇게 하면 기존 emergency 배열도 변경되기 때문에 구조 분해할당 해줌
    var answer = [];
    for(let i = 0 ; i< emergency.length ; i++){
        answer.push(arr.indexOf(emergency[i])+1)
    }
    return answer;
}