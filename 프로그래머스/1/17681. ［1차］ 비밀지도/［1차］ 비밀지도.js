function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i < n ; i++){
        var sharp = '';
        let binaryArr1 = arr1[i].toString(2) // 각각의 숫자를 2진수로 변환
        let binaryArr2 = arr2[i].toString(2)
        while(binaryArr1.length < n){
            binaryArr1 = '0' + binaryArr1 // 2진수로 바꾸었을때 맨앞이 0일때 자릿수 맞춰주기 
        }
        while(binaryArr2.length < n){
            binaryArr2 = '0' + binaryArr2
        }
        for(let j = 0 ; j < n ; j++){
            if(binaryArr1[j]==1 || binaryArr2[j]==1){ // 두 2진수를 비교하여 하나라도 1이면 벽으로 만들어줌
                sharp += '#'
            }else{
                sharp += ' '
            } 
        }
        answer.push(sharp) // 만들어진 '#'을 push
    }
    
    return answer;
}