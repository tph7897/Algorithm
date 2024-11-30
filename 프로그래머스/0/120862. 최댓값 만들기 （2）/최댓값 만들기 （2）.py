def solution(n):
    
    n.sort();
    num1 = n[0] * n[1];
    num2 = n[len(n) - 1] * n[len(n) - 2];
    num3 = n[0] * n[len(n) - 1];
    
    return max(num1, num2, num3)
