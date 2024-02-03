var input = require('fs').readFileSync('/dev/stdin').toString();
var n = parseInt(input);
if(n>89) console.log("A")
else if(n>79) console.log("B")
else if(n>69) console.log("C")
else if(n>59) console.log("D")
else console.log("F")