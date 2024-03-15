function solution(arr, flag) {
    var answer = [];
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i] ; j++){
            if(flag[i]){
                answer.push(arr[i])
                answer.push(arr[i])
            }else{
                answer.pop()
            }
        }  
    }
    return answer;
}