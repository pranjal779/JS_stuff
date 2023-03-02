function testEqualOrGreater(val){
    if (val < 20){
        return "under 20";
    }
    if (val < 55){
    return "under 55";
    }
    
    return "55 and over";
}

console.log(testEqualOrGreater(10));