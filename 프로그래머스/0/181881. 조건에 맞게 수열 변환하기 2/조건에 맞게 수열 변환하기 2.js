function solution(arr) {
    var answer = 0;
    let arr1 = []
    let arr2 = arr
    while(JSON.stringify(arr1) !== JSON.stringify(arr2)){
        arr1 = arr2
        arr2 = arr2.map(e=>{
            if(e >= 50 && e%2==0){
                return e/2;
            } else if (e < 50 && e%2==1){
                return e*2 + 1;
            } else {
                return e;
            }
        })
        answer++
    }
    return answer-1;
}