function solution(a, b) {
    let answer = 1
    for(let i = b ; i > 1 ; i--){
        if(a%i == 0 && b%i == 0){
            a /= i
            b /= i
            break
        }
    }
    for(let i = 2 ; i <= b ; i++){
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