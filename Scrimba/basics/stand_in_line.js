// 1:08:08
function nextInLine(arr, item){
    //your code here
    arr.push(item);
    return item;
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7))
console.log("2ndAfter: " + JSON.stringify(testArr));