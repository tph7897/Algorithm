const [N, ...input] = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

 const n = 1000000; // 문제에서 주어진 덱 크기
 let output = "";

 const deck = new Array(n); // 100000 크기만큼 배열 생성
 let size = 0;
 let front = -1;
 let rear = -1;

 const addFirst = (x) =>{
    if (size === 0){ // 아직 아무것도 들어오지 않았을 때
        front = 0;
        rear = 0;
    }else{
        if( front === 0){
            front = n - 1; // 왜 100000-1 을 하는걸까.. 이해완
        }else{
            front--;
        }
    }

    deck[front] = x;
    size++;

 }

 const addLast = (x) => {
    if(size === 0){
        front = 0;
        rear = 0;
    }else{
        if(rear === n-1){
            rear = 0;
        }else{
            rear++;
        }
    }

    deck[rear] = x;
    size++;
 }

 const removeFirst = ()=>{
    output += deck[front] + "\n";
    size--;
    if(front === n-1){ // 덱의 길이 100000을 넘었을때 다시 0으로 돌려줘야함
        front = 0;
    }else{
        front++;
    }
 }

 const removeLast = () =>{
    output += deck[rear] + "\n";
    size--;
    if(rear === 0){
        rear = n - 1;
    }else{
        rear--;
    }
 }

 input.forEach((x) => {
    const [act, num] = x.split(" ").map(Number);

    if (act === 1) {
        addFirst(num);
      }
    
      if (act === 2) {
        addLast(num);
      }
    
      if (act === 3) {
        size === 0 ? (output += "-1\n") : removeFirst();
      }
    
      if (act === 4) {
        size === 0 ? (output += "-1\n") : removeLast();
      }
    
      if (act === 5) {
        output += size + "\n";
      }
    
      if (act === 6) {
        size === 0 ? (output += "1\n") : (output += "0\n");
      }
    
      if (act === 7) {
        size === 0 ? (output += "-1\n") : (output += deck[front] + "\n");
      }
    
      if (act === 8) {
        size === 0 ? (output += "-1\n") : (output += deck[rear] + "\n");
      }
    });
    
    console.log(output);