function solution(numlist, n) {
    let answer = numlist.sort((a,b)=>(a-n)+(b-n)==0?(b-n)-(a-n):Math.abs(a-n)-Math.abs(b-n))           
    return answer;
}