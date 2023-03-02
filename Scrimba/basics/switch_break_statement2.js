function switchstatement(val){
    var answer = "";
    switch(val){
    case "a": 
        answer = "alpha";
        break;
    case "b":
        answer = "beta";
        break;
    case "c":
        answer = "gamma";
        break;
    case "d":
        answer = "delta";
        break;
    default:
        answer = "stoph."
    }
return answer;
}

console.log(switchstatement("a"));
console.log(switchstatement("b"));
console.log(switchstatement("c"));
console.log(switchstatement("d"));
console.log(switchstatement(4));



//[1:41:07]

/*
function switchstatement(val){
    var answer = "";
    switch(val){
    case 1: 
    case 2:
    case 3:
        answer = "gamma";
        break;
    case 4: 
    case 5:
    case 6:
        answer = "ojonon";
        break;
    case 7: 
    case 8:
    case 9:        
        answer = "stoph."
        break;
    }
return answer;
}

console.log(switchstatement(5));
console.log(switchstatement(1));
console.log(switchstatement(9));
console.log(switchstatement(3));
console.log(switchstatement(4));
*/