function solution(board) {
    let size = board[0].length
    let bigArr = new Array(size+2).fill(0).map(() => new Array(size+2).fill(0));
    for (let i = 1; i < size+1; i++) {
        for (let j = 1; j < size+1; j++) {
            bigArr[i][j] = board[i - 1][j - 1]
        }
    }
    for(let i = 1 ; i < size+1 ; i++){
        for(let j = 1 ; j < size+1 ; j++){
            if(bigArr[i][j] == 1){
                bigArr[i-1][j-1]?'': bigArr[i-1][j-1]=2
                bigArr[i-1][j]?'': bigArr[i-1][j]=2
                bigArr[i-1][j+1]?'': bigArr[i-1][j+1]=2
                bigArr[i][j-1]?'': bigArr[i][j-1]=2
                bigArr[i][j+1]?'': bigArr[i][j+1]=2
                bigArr[i+1][j-1]?'': bigArr[i+1][j-1]=2
                bigArr[i+1][j]?'': bigArr[i+1][j]=2
                bigArr[i+1][j+1]?'': bigArr[i+1][j+1]=2
            } 
        }
    }
    var answer = 0;
    for(let i = 1 ; i < size+1 ; i++){
        for(let j = 1 ; j < size+1 ; j++){
            bigArr[i][j] ? '' : answer++
        }
    }
    return answer;
}