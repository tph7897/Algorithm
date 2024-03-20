function solution(myStr) {
    var answer = myStr.split(/[abc]/).filter(e=>e);
    return answer.length ? answer : ["EMPTY"];
}