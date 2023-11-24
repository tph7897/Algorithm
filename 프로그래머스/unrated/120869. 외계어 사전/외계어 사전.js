function solution(spell, dic) {
    var answer = 2;
    let count = 0;
    for(let i = 0 ; i < dic.length ; i++){
        for(let j=0; j<spell.length; j++){
            if(dic[i].indexOf(spell[j]) == -1){
                count++;
            } 
        }
        if(count <= 0) {
            answer = 1;
            break;
        }
        count = 0;
    }
    return answer;
}