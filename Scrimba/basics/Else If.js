function testElseIf(val){
    var result = "";
    
    if (val > 10){
        return "yes."
    }
    else if (val < 5){
        return "No."
    }
    else{
        return "it is between 8 and 5."
    }
}

testElseIf(9);
console.log(testElseIf());
console.log(testElseIf(11));