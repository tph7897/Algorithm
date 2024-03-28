// 대소문자 변환
// 대문자와  소문자가  같이  존재하는  문자열을  입력받아  대문자는  소문자로  소문자는  대문자로
// 변환하여 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
// ▣ 입력예제 1
// StuDY
// ▣ 출력예제 1
// sTUdy

const stringNum = (str) => {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            answer += str[i].toUpperCase();
        }
    }
    return answer;
};
console.log(stringNum("StuDY"));
