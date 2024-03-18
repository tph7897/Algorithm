function solution(num_list) {
    var answer = 0;
    for(let i = 0 ; i < num_list.length ; i++){
        let n = num_list[i]
        while(!(n==1)){
            if(n%2){
                n = (n-1)/2 
            }else{
                n = n/2 
            }
            answer++
        }
    }
    return answer;
}