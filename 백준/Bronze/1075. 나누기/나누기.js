let [n, f] = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((item) => +item);
 
solution(n, f);
 
function solution(n, f, answer = 0) {
  let number = ((n/100) | 0) * 100;
 
  while (true) {
    if (number % f == 0) {
      answer = number;
      break;
    } else {
      number += 1;
    }
  }
  console.log(("" + answer).slice(-2));
}