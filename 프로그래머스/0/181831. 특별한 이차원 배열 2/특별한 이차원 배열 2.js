function solution(arr) {
    const n = arr.length
    var answer = 1;
    for(let i = 0 ; i < n ; i++ ){
        for(let j = 0 ; j < n ; j++ ){
            if(arr[i][j] !== arr[j][i]){
                answer = 0
                break
            }
        }
    }
    return answer;
}