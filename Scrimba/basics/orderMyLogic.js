function orderMyLogic(val){
    if (val < 5){
        return "it is less than 5.";
    } else if(val < 10){
        return "it is less than 10.";
    }
    else{
        return "it is greater than or equal to 10"
    }
    
}

console.log(orderMyLogic(3));
console.log(orderMyLogic(7));
console.log(orderMyLogic(19));