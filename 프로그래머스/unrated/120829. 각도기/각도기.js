function solution(angle) {
    if (angle < 90 ) {
        return 1
    }
    else if (angle == 90) {
        return 2
    }
    else if ( 180 == angle ) {
        return 4
    }
    else {
        return 3
    }
}