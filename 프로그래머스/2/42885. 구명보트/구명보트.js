function solution(people, limit) {
    people.sort((a,b)=>a-b)
    let count = 0
    let leftIndex = 0;
    let rightIndex = people.length - 1;

    while (leftIndex <= rightIndex) {
        if (people[leftIndex] + people[rightIndex] <= limit) {
            leftIndex++;
        }
        rightIndex--;
        count++;
    }
    return count;
}