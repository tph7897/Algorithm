function solution(s) {
    return s.split(' ').map(i => i ? i[0].toUpperCase() + i.slice(1).toLowerCase() : i).join(' ');
}