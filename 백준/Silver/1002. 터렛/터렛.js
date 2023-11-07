const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");


const a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el))


    const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    const plusR = r1 + r2
    const minusR = Math.abs(r1 - r2);

    if (d == 0) { //원점이 같을때

        if (minusR == 0) {//원점이 같고 원이 겹칠때
            console.log(-1)
        }
        else {// 원점이 같지만 원의 크기가 다를때
            console.log(0)
        }
    }
    else {
        if (d > plusR || d < minusR) {// 두 원이 안만남
            console.log(0)
        }
        else if (d == plusR || d == minusR) {// 두원이 외접, 내접
            console.log(1)
        }
        else if (d < plusR && d > minusR) {// 두 원이 두 점에서 만남
            console.log(2)
        }
    }
}