const nums = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < nums.length - 1; i++) {
	const num = nums[i];
	let sum = 0;
	const arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			sum += i;
			arr.push(i);
		}
	}
	if (sum == num) {
		console.log(`${num} = ${arr.join(' + ')}`);
	} else {
		console.log(`${num} is NOT perfect.`);
	}
}