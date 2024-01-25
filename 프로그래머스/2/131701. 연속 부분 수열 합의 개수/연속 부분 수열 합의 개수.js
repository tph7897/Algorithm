function solution(elements) {
    var answer = 0;
    const circleElements = [...elements, ...elements]
    let arr = []
    for(let i = 0 ; i<elements.length ; i++){
        for(let j = i+1 ; j <= i + elements.length ; j++){
            const sum = circleElements.slice(i, j).reduce((acc, cur)=> acc + cur, 0)
            arr.push(sum)
        }
    }
    return [...new Set(arr)].length;
}