function solution(array, n) {
    let answer = 0;
    let arr = array.map(i => Math.abs(i - n));
    let minValue = Math.min(...arr);
    let minIndices = [];

    for (let i = 0; i < array.length; i++) {
        if (arr[i] === minValue) {
            minIndices.push(i);
        }
    }

    minIndices.sort((a, b) => array[a] - array[b]);
    
    return array[minIndices[0]];
}