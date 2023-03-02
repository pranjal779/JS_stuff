function logicalAndoperator(val) {
    if(val <= 50 && val >= 20){
        return "Yes.";
    }
    return "No.";
}

logicalAndoperator(22)
console.log(logicalAndoperator(22));

function testOR(val) {
    if(val > 100 || val > 20){
        return "Yes.";
    }
    return "No.";
}

testOR(8)
console.log(testOR(8)); // change the operators around