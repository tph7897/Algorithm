function solution(my_string) {
    return eval(my_string.replace(/[^0-9]/gi, "").split('').join('+'))
}