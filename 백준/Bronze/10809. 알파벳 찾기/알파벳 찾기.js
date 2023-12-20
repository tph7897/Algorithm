const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const alphabet = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = input.charCodeAt(i) - 97;
  if (alphabet[index] === -1) {
    alphabet[index] = i;
  }
}

console.log(alphabet.join(" "));
