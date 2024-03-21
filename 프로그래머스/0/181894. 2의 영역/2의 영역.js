function solution(arr) {
    const index = arr.indexOf(2)
    const lastIndex = arr.lastIndexOf(2)
    const value = arr.slice(index, lastIndex+1);
    return value.length ? value : [-1]
}