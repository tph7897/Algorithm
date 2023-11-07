const fs = require('fs')
let [count, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => x.replace('\r', ''));

for(let i = 0; i<count ; i++){
    let arr = input[i].split(" ")
    let newArr = arr.map((item)=> item.split('').reverse().join(""))
    console.log(newArr.join(" "))
}
