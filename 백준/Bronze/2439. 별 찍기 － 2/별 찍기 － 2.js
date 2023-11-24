        const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
        let star = ''
        let blank = ''
        for (let i = 1; i <= input; i++) {
            star += "*"
            for (let j = 0; j < input - i; j++) {
                blank += " "
            }
            console.log(blank + star)
            blank = ''
        }