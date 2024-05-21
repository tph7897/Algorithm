const input = +require('fs').readFileSync('/dev/stdin').toString().trim()

for (let i = 0 ; i<input; i++){
    const blank = ' '.repeat(input-1-i)
    const star = '*'.repeat(2*i+1)
    console.log(blank+star)
}

for (let i =input-1; i>0; i--){
    const blank = ' '.repeat(input -i)
    const star ='*'.repeat(2*(i-1)+1)

    console.log(blank+star)
}