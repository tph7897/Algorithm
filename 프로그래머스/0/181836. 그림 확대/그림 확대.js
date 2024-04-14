function solution(picture, k) {
    return picture.map(e=>e.split('').map(e=>e.repeat(k)).join('')).flatMap(e => Array(k).fill(e));
}