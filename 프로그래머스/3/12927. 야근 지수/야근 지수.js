function solution(n, works) {
    works.sort((a, b) => b - a);
    let index = 0
    while (n > 0 && works[index] > 0) {
       works[index]--;
        if (works[index] < works[index + 1]) {
            index++;
        }
        while(index > 0 && works[index] <= works[index - 1]){
            index--;
        }
        n--;
     }
    return works.reduce((a, c) => a + c ** 2, 0);
}