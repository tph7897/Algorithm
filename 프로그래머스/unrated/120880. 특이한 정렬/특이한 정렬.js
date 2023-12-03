function solution(numlist, n) {
    let answer = numlist.map(i => i-n)
                    .sort((a,b)=>Math.abs(a)-Math.abs(b)==0?b-a:Math.abs(a)-Math.abs(b))
                    .map(i => i+n)
    return answer;
}