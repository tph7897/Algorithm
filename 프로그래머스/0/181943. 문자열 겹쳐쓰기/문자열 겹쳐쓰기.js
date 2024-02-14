function solution(my_string, overwrite_string, s) {
    var answer = my_string.substring(0, s) 
                + overwrite_string 
                + my_string.substring(overwrite_string.length+ s);
    return answer;
}