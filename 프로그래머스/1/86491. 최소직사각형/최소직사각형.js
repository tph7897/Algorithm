function solution(sizes) {
    let cardW = []
    let cardH = []
    sizes.forEach((size) => (cardW.push(Math.max(...size)), cardH.push(Math.min(...size))))             
    // sizes.forEach((size) =>{
    //     cardW.push(Math.max(...size))
    //     cardH.push(Math.min(...size))
    //              })
    return Math.max(...cardW)*Math.max(...cardH)
}