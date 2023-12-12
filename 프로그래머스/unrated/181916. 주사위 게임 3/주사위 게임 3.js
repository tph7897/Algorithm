function solution(a, b, c, d) {
    let [A, B, C, D] = [a, b, c, d].sort((a,b)=> b-a)
    if(A == D) return 1111*A
    else if(A == C) return (10 * A + D)**2
    else if(B == D) return (10 * D + A)**2
    else if(A == B && C == D) return (A + C) * (A - C)
    else if(A == B) return C * D
    else if(B == C) return A * D
    else if(C == D) return A * B
    return D
}