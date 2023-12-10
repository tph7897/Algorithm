function solution(a, b) {
    const sum1 = a + '' + b
    const sum2 = b + '' + a
    return sum1 > sum2 ? sum1*1 : sum2*1
}