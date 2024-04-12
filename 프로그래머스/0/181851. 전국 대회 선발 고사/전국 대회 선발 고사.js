function solution(rank, attendance) {
    let [a, b, c] = rank.filter((_,i)=>attendance[i]).sort((a,b)=> a-b).map(e=>rank.indexOf(e))
    return 10000 * a + 100 * b + c
}