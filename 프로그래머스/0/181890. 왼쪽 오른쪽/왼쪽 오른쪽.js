function solution(str_list) {
    const l = str_list.indexOf("l");
    const r = str_list.indexOf("r");
    
    if (l === -1 && r === -1) {
        return [];
    } else if (l === -1) {
        return str_list.slice(r + 1);
    } else if (r === -1) {
        return str_list.slice(0, l);
    } else {
        return l > r ? str_list.slice(r + 1) : str_list.slice(0, l);
    }
}