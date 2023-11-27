function factorial(num){
    let answer = 1;
    for(let i = num ; i>1; i--){
        answer *= i
    }
    return answer
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
}

// 큰 숫자의 나눗셈에 대해서는 소수점 처리를 하는게 좋습니다. 무한 소수같은 경우 무한히 이어지는걸 정해진 소수점 자리에서 반올림 해서 나타내는데 계산에는 그 뒤의 소수점 자리까지 계산을 하는건지 정확히 맞아 떨어지는 계산에서도 소수점이 나오는 경우가 있습니다. 물론 값의 차이가 미미하기 때문에 반올림으로 처리하면 무시해도 되는 차이이긴 합니다. 코드에서 소수점에 관한 처리에 대해서 찾아보면 왜 그런지 알 수 있을겁니다. 반례입니다.
// 입력값 〉 30, 15
// 기댓값 〉 155117520