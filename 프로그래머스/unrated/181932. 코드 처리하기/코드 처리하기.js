function solution(code) {
    let ret = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (code[i] != 1) {
            ret += (mode === i % 2) ? code[i] : '';
        } else {
            mode = 1 - mode;
        }
        //console.log(i, code[i], mode, ret)
    }
    return ret || "EMPTY";
}