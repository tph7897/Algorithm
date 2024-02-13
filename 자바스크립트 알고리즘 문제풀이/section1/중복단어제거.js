const string = (arr) => {
    return [...new Set(arr)];
};
let arr = ["good", "time", "good", "time", "student"];
console.log(string(arr));
