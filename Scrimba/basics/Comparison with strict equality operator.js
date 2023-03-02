function testEqual(val){
    if (val === 10){
        return "Equal";
    }
    return "No."    
}

console.log(testEqual(10));
console.log(testEqual('10'));


/*
'' in if stat also returns false.
== in JavaScript is used for comparing two variables, 
but it ignores the datatype of variable. === is used for 
comparing two variables, but this operator also checks 
datatype and compares two values. Checks the equality 
of two operands without considering their type.
*/