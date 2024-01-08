function solution(rny_string) {
    return rny_string.split('').map(e=>e=='m'?'rn':e).join('');
}