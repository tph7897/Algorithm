function solution(polynomial) {
    let arr = polynomial.split(' + ')
    let xNum = 0;
    let Num = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].lastIndexOf('x') !== -1){
            arr[i].replace(/[^0-9]/g, "") == "" ? xNum ++: xNum += +arr[i].replace(/[^0-9]/g, "");
        }else{
            Num += +arr[i]
        }
    }
    return (xNum ? xNum == 1? 'x' : xNum+'x' : '') + (xNum&&Num ? ' + ': '') + (Num ? Num : '')
}