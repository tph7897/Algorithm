function solution(num_list) {
    var answer = 0;
    let even = 0;
    let odd = 0;
    for(let i = 0 ; i < num_list.length ; i++){
        num_list[i] % 2 ? odd += ''+ num_list[i] : even += ''+ num_list[i]
    }
    return odd*1 + even*1;
}