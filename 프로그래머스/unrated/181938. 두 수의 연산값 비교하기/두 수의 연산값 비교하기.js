function solution(a, b) {
    const sum = +(a + '' +b)
    const pro = 2 * a * b
    return sum > pro ? sum : pro;
}