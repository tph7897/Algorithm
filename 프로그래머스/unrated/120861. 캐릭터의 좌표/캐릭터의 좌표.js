function solution(keyinput, board) {
    let location = [0,0]
    for(let i = 0 ; i < keyinput.length ; i++){
        switch(keyinput[i]) {
          case 'up':
            if(location[1]<(board[1]-1)/2){
                location[1]++}
            break
          case 'down':
            if(location[1]> -(board[1]-1)/2){
                location[1]--}
            break
          case 'right':
            if(location[0]<(board[0]-1)/2){
                location[0]++}
            break
          case 'left':
            if(location[0]> -(board[0]-1)/2){
                location[0]--}
            break
        }
    }
    return location;
}