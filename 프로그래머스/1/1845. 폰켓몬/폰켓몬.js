function solution(nums) {
    let select = nums.length/2
    let numbers = [...new Set(nums)]; // 배열로 부터 세트를 만들어내면 중복 값이 모두 제거
    var answer = select>=numbers.length? numbers.length : select
    return answer;
}