function sum (arr){
    return arr.reduce((acc, cur)=> acc+cur, 0)
}

function solution(arr1, arr2) {
    let answer = 0
    if(arr1.length == arr2.length){
        if(sum(arr1) > sum(arr2)) answer = 1
        else if(sum(arr1) < sum(arr2)) answer = -1
    }else{
        arr1.length > arr2.length ? answer = 1 : answer = -1
    }
    return answer
}