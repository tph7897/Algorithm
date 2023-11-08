function solution(operations) {
    let arr = []
    let op = operations.map(operation => operation.split(' '));
    for(let i = 0; i<op.length; i++){
        if(op[i][0]=="I"){
            arr.push(Number(op[i][1]))
        }else{
            let deleteValue = op[i][1]=="1"?Math.max(...arr):Math.min(...arr)
            let Idx = arr.indexOf(deleteValue);
            arr.splice(Idx, 1);
        }
    }
    return arr.length ? [Math.max(...arr), Math.min(...arr)] : [0, 0];
}