function solution(before, after) {
    return after.split('').sort().join('') == before.split('').sort().join('')? 1 : 0
}