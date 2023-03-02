function testEqualOrGreater(val){
    if (val >= 20){
        return "20 or over";
    }
    if (val >= 10){
    return "10 or over";
    }
    
    return "less than 10";
}

console.log(testEqualOrGreater(10));