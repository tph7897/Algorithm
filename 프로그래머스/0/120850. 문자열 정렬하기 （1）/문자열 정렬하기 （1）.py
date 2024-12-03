def solution(my_string):
    a = [int(i) for i in my_string if i.isdigit()]
    a.sort()
    return a