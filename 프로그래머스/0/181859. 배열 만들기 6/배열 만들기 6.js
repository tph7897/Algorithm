function solution(arr) {
    let stk = [];
    arr.forEach(e=>{
        const stkLen = stk.length
        if(stkLen == 0) stk.push(e)
        else if(stk[stkLen-1] == e) stk.pop()
        else stk.push(e)
    })
    return stk.length ? stk : [-1];
}