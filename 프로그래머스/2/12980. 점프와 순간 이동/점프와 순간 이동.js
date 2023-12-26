function solution(n) {
    var ans = 0;
    while (n) ans += n % 2, n = Math.floor(n / 2);
    return ans;
}