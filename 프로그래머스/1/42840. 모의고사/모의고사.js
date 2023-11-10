function solution(answers) {
    var answer = [];
    let user1 = [1,2,3,4,5]
    let count1 = 0
    let user2 = [2,1,2,3,2,4,2,5]
    let count2 = 0
    let user3 = [3,3,1,1,2,2,4,4,5,5]
    let count3 = 0
    for(let i = 0; i < answers.length ; i++){
        
        if(answers[i]==user1[i%5]){
            count1++
        }
        if(answers[i]==user2[i%8]){
            count2++
        }
        if(answers[i]==user3[i%10]){
            count3++
        }
    }
    var max = Math.max(count1,count2,count3);

    if (count1 === max) {answer.push(1)};
    if (count2 === max) {answer.push(2)};
    if (count3 === max) {answer.push(3)}; 
    
    return answer;
}