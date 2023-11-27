function solution(numbers, k) {
    let arr = []
    var answer = 0;
    while(arr.length<k*2){
        arr.push(...numbers)
    }
    return arr[k*2-2];
}