function solution(price, money, count) {
    var sum = 0;
    for(i=1 ; i<= count; i++){
        sum += price*i
    }
    return sum>=money?sum-money: 0
}