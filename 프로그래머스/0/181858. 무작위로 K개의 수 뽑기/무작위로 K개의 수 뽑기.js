function solution(arr, k) {
    const numSet = [...new Set(arr)];
    if(numSet.length > k) {
        return numSet.slice(0,k)
    }else{
        while (numSet.length < k) {
        numSet.push(-1);
        }
    }
    return numSet
}