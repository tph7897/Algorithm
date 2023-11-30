function getNumbeOfCases(str) {
	// 중복을 막기 위해서
	const result = new Set();

	// 재귀 함수를 통해 만든다.
	const temp = (currFix, eachArr) => {
		for (let i = 0; i < eachArr.length; i++) {
			const tempEachArr = [...eachArr];
			const tempCurrFixVal = tempEachArr.splice(i, 1)[0];
			const tempCurrFix = currFix + tempCurrFixVal;
			result.add(tempCurrFix);
			if (tempEachArr.length > 0) temp(tempCurrFix, tempEachArr);
		}
	};

	// 시작
	for (let i = 0; i < str.length; i++) {
		let target = str[i];
		result.add(target);

		const eachArr = [...str];
		eachArr.splice(i, 1);

		temp(target, eachArr);
	}

	return new Array(...result);
}

function solution(babbling) {
    let johab = getNumbeOfCases(["aya", "ye", "woo", "ma"])
    var answer = 0;
    for(let i = 0 ; i < babbling.length ; i++){
        if(johab.includes(babbling[i])){
            answer++
        }
    }
    return answer
}