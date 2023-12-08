function solution(numlist, n) {
    return numlist.sort((a,b)=>a+b==n*2?b-a:Math.abs(a-n)-Math.abs(b-n));
}