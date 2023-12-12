function solution(n) {
    let arr = [1]
    var sum = 0;
    while(arr.length<=n){
        for(let i = 0 ; i < arr.length ; ++i){
            sum  += arr[i] * arr.at(-i-1)
        } 
        arr.push(sum)
        sum = 0
    }
    return arr.at(-1);
}
// [1,1,2,5,14,42,132,429,1430,4862,16796,58786,208012,742900,2674440]