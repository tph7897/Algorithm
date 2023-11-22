function solution(array, n) {
    let answer = 0;
    let arr = array.map(i => Math.abs(i - n));
    let minValue = Math.min(...arr);
    let minIndex = [];

    for (let i = 0; i < array.length; i++) {
        if (arr[i] === minValue) {
            minIndex.push(i);
        }
    }

    minIndex.sort((a, b) => array[a] - array[b]);
    
    return array[minIndex[0]];
}