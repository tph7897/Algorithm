function solution(chicken) {
    var answer = 0;
    let plusChicken = 0
    let coupon = chicken
    while(coupon >= 10){
        plusChicken = Math.floor(coupon/10)
        answer += plusChicken
        coupon = coupon % 10 + plusChicken
    }
    return answer;
}