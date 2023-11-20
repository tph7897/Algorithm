function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생이 체육복을 도난당하였을때 본인이 입음
    // lost와 reserve에 겹치는 학생이 있을시 두 배열에서 모두 제거
    // includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드 포함한다면 true 반환
    let newLost = lost.sort((a,b)=>a-b).filter((r)=>!reserve.includes(r)) 
    let newReserve = reserve.sort((a,b)=>a-b).filter((r)=>!lost.includes(r))
    // 체육복이 없는 학생의 수
    var answer = n - newLost.length
    
     newLost.forEach((l)=>{
        if(newReserve.length===0){ // 여분 체육복이 없음
            return;
        }
        if(newReserve.includes(l-1)){ // 본인보다 사이즈가 큰 친구에게 빌려줌
            newReserve=newReserve.filter((r)=>r!==l-1);
            answer++;
        }
        else if(newReserve.includes(l+1)){ // 본인보다 사이즈가 작은 친구에게 빌려줌
            newReserve=newReserve.filter((r)=>r!==l+1);
            answer++;
        }
    })
    return answer;
}