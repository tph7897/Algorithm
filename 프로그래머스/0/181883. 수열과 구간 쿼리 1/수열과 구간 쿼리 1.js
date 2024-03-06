function solution(arr, queries) {
    for(let i = 0 ; i < queries.length ; i++){
        const [s, e] = queries[i]
        for(let i = s ; i <= e ; i++){
            arr[i]++
        }
    }
    return arr;
}