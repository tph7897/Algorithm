function solution(arr) {
    var stk = [arr[0]];
    for(let i = 1 ; i < arr.length ; i++){
        if(stk.length==0){
            stk.push(arr[i])
        }else if(stk[stk.length-1] < arr[i]){
            stk.push(arr[i])
        }else{
            stk.pop()
            i--
        }
    }
    return stk;
}