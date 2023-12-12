function solution(bandage, health, attacks) {
    let HP = health
    var answer = 0;
    let attack = 0;
    let heelTime = -1;
    let atTime = attacks.map(i => i[0])
    let atDmg = attacks.map(i => i[1])
    for(let i = 0 ; i <= attacks[attacks.length-1][0] ; i++){ // 시간지남
        
        if(i==atTime[attack]){ // 몬스터 공격
            HP -= atDmg[attack]
            if(HP < 1) break // 공격 받고 죽을때
            attack++
            heelTime = 0
        }else{ // 공격하지 않을때
            HP += bandage[1]
            if(HP > health){ // 최대  체력을 넘을 수 없음
                HP = health
            }
            heelTime++
        }

        if(heelTime >= bandage[0]){ // 붕대 다 감았을때 추가 회복
            heelTime = 0
            HP += bandage[2]
        }
        // console.log([i, HP, heelTime, order]) // 입출력 예와 동일
    }
    return HP > 0 ? HP : -1 ;
}