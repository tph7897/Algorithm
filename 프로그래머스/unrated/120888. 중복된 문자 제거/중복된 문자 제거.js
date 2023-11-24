function solution(my_string) {
    let arr = my_string.split('')
    var answer = [];
    for(let i = 0 ; i < my_string.length ; i++){
        for(let j = i+1; j< my_string.length ; j++){
            if(my_string[i] == my_string[j]){
                arr[j] =""
            }
        }
    }
    return arr.join('');
}