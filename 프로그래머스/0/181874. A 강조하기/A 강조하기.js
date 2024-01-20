function solution(myString) {
    return myString.split('').map(e=> e =='a' || e == 'A' ? "A" : e.toLowerCase()).join('');
}