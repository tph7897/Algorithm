function solution(arr) {
    const length = Math.pow(2, Math.ceil(Math.log2(arr.length)));
    return arr.concat(Array(length - arr.length).fill(0));
}

// function solution(arr) {
//     let length = 2
//     while(arr.length > length) length *= 2
//     while(arr.length < length) arr.push(0)
//     return arr;
// }