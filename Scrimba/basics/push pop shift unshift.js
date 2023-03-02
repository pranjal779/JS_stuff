var ourArray = ["happy", "sam", "cato"];
ourArray.push(["neel", "yoootube"]);

console.log(ourArray)

ourArray.push("samj", "vidya")
console.log(ourArray)

var myArray =[["James clear", 1], ["Matthew Reily", 2]];
console.log(myArray)
myArray.push(["Rick Roidan", 3]);
console.log(myArray)

//pop function
var ourArray2 = [1, 2, 3];
var removeourArray2 = ourArray2.pop();
console.log(removeourArray2);
console.log(ourArray2)

var myArray2 = [["james", 1], ["pranjal", 2], ["Pace", 3]];
console.log(myArray2);
var removefrommyArray2 = myArray2.pop();
console.log(removefrommyArray2)
console.log(myArray2)

//shift fn
var myArray3 = [["stipson", 1], ["campo", 24], ["thiker", 3]];
console.log(myArray3)
var removemyArray3 = myArray3.shift();
console.log(removemyArray3)
console.log(myArray3);

var myArray4 = ["stipson", 1, ["campo", 24], ["thiker", 3]];
console.log(myArray4)
var removmyArray4 = myArray4.shift();
console.log(myArray4)

//unshift
//adds an element in the begining of the array
var myArray5 = ["stipson", "campo", "thiker"];
myArray5.shift();
myArray5.unshift("uuuu");
console.log(myArray5);

var myArray6 = [["yuuy", 1], ["kool", 2]];
console.log(myArray6)
myArray6.shift();
myArray6.unshift(["lpoopl", 3]);
console.log(myArray6)