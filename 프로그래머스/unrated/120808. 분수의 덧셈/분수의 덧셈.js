function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    for(let i = denom ; i > 1 ; i--){
        if(numer%i == 0 && denom%i == 0){
            numer /= i
            denom/= i
            break
        }
    }
    return [numer, denom];
}