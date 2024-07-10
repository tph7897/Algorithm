let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const numArr = input[1].split(" ").map(Number); 
let sortedArr = Array.from(new Set(numArr)).sort((a, b) => a - b);

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}

console.log(
    numArr.map((num) => binarySearch(sortedArr, num)).join(" ")
);