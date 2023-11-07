function solution(bridge_length, weight, truck_weights) {
  let time = 0;                    // 경과 시간
  let bridge = new Array(bridge_length).fill(0); // 0으로 된 배열에서 시뮬레이션을 돌림
  let totalWeightOnBridge = 0;     // 다리 위의 총 무게
  while (bridge.length > 0) {
    time++; // 시간 증가
    totalWeightOnBridge -= bridge.shift();// 배열의 맨앞에 0을 뺀다
    if (truck_weights.length > 0) {// 남은트럭이 있을때 
        // 다리위의 총 무게 + 다음순번트럭 무게의 합이 다리가 견딜수 있는 무게보다 낮을때 
      if (totalWeightOnBridge + truck_weights[0] <= weight) {
        totalWeightOnBridge += truck_weights[0];
          // 배열에 트럭 진입
        bridge.push(truck_weights.shift())
      } else {
          // 배열에 0 진입
        bridge.push(0)
      }
    }
  }
  return time;
}





