function solution(n) {
    let num = 1;
    let i = 1;
    while(num<=n){
        i++
        num = num*i
    }
    
    return i-1;
}