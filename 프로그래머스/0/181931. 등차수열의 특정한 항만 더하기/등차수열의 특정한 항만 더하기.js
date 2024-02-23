function solution(a, d, included) {
    let add = a
    let answer = 0
    for(let i = 0 ; i < included.length ; i++){
        if(included[i]) answer+= add
        add += d
    }
    return answer;
}