function solution(a, b) {
    let answer = 1
    for(let i = b ; i > 1 ; i--){ // 기약분수 만들기
        if(a%i == 0 && b%i == 0){
            a /= i
            b /= i
            break
        }
    }
    for(let i = 2 ; i <= b ; i++){ // 분모의 소인수 판별하여 2 또는 5가 아닐시에 2로 반환
        if(b%i == 0){
            b /= i
            if(i !== 2 && i !== 5){
                answer = 2
                break
            }
            i --
        }
    }
    return answer
}