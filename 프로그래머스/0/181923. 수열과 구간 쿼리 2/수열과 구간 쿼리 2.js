function solution(arr, queries) {
    return queries.map(([s, e, k])=>
                       arr.slice(s,e+1).filter(e=> e > k).length ? 
                       Math.min(...arr.slice(s,e+1).filter(e=> e > k)) : -1);
}