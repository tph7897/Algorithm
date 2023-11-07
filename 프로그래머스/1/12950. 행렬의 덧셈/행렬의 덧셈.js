function solution(arr1, arr2) {
    let answer = []
    for(i=0; i<arr1.length ; i++){ // [ 1, 2 ], [ 2, 3 ]
        let sum = []
        for(j=0;j<arr1[i].length; j++){
            sum.push(arr1[i][j]+arr2[i][j])
        }
    answer.push(sum)
    }
    return answer
}