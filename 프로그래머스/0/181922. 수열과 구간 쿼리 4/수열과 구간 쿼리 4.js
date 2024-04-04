function solution(arr, queries) {
    for (let query of queries) {
        let [s, e, k] = query
        for(s ; s <= e ; s++){
            if((s%k)==0)arr[s]++
        }
    }
    return arr;
}