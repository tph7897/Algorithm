function solution(s) {
    let change = 0;
    let zero = 0;
    while(s != "1"){
        s = s.split("0")
        zero += s.length-1
        s = s.join('').length.toString(2)
        change++
    }
    return [change, zero];
}
