function solution(numbers) {
    let arr = numbers.sort((a, b) => b - a);
    let num1 = arr[0] * arr[1];
    let num2 = arr[arr.length - 1] * arr[arr.length - 2];
    let num3 = arr[0] * arr[arr.length - 1];
    
    return Math.max(num1, num2, num3);
}