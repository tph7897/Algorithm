function solution(id_pw, db) {
    var answer = "fail";
    for(let i = 0 ; i < db.length ; i++){
        if(db[i][0]==id_pw[0]){
            answer = "wrong pw"
            if(db[i][1]==id_pw[1]){
                answer = "login"
                break
            }
        }
    }
    return answer;
}