function solution(phone_book) {
    // 주어진 배열을 정렬한다. 접두어: 낱말의 앞에 붙어서 의미를 첨가하여 다른 낱말을 이루는 말
    phone_book.sort()
    // 뒤에있는 번호를 앞에 있는 번호와 비교한다
    for (let i = 0 ; i<phone_book.length-1 ; i++){
        if(phone_book[i+1].indexOf(phone_book[i])==0){
            return false
        }
    }
    return true
}