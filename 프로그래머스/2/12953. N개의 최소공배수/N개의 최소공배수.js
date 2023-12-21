function solution(arr) {
    let num = 1;
    arr.sort((a, b) => b - a);

    while (true) {
        if (arr.every(e => arr[0] * num % e === 0)) {
            break;
        }
        num++;
    }
    return arr[0] * num;
}