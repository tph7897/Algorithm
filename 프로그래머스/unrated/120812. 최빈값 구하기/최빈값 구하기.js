function solution(array) {
    let maxNum = Math.max(...array)
    let arr = new Array(maxNum+1).fill(0);
    for(let i = 0 ; i < array.length ; i++){
        arr[array[i]] += 1
    }
    let max = Math.max(...arr)
    let answer = 0;
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == max){
            answer = i
            count ++
        }
    }
    return count == 1 ? answer : -1
}