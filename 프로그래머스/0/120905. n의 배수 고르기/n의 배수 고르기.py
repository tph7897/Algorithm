def solution(n, numlist):
    return list(filter(lambda num : not num % n , numlist))