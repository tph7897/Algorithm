function solution(my_string) {
    let arr = new Array(52).fill(0);
    for(let i = 0 ; i < my_string.length ; i++){
        const code = my_string[i].charCodeAt(0)
        code<91?arr[code-65]++ : arr[code-71]++ 
    }
    return arr;
}