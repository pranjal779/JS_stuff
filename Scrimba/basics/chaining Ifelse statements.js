/*
Write chained if/else statement to fulfill the following conditions:

num < 5 - return "Tinny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function testSize(num){
    if(num < 5){
        return "Tinny"
        } else if (num < 10){
            return "Small"
    } else if(num < 15){
        return "Medium"
        } else if(num < 20){
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(8));
console.log(testSize(11));
console.log(testSize(20));
console.log(testSize(30));