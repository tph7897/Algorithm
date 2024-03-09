function solution(intStrs, k, s, l) {
    return intStrs.map(e=>+[...e].splice(s,l).join('')).filter(e=>e>k);
}