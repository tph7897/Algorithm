function solution(l, r) {
    let n = l%5 ? l + (5-l%5) : l
    var answer = [];
    for(let i = n ; i <= r ; i += 5){
        let arr=String(i)
        if(![...arr].every(x=>x==='5'||x==='0'))continue;
        answer.push(i)
    }
    return answer.length? answer:[-1];
}