function switchstatement(val){
    var answer = "";
    switch(val){
    case 1: 
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;    
    }
return answer;
}

console.log(switchstatement(1));
console.log(switchstatement(2));
console.log(switchstatement(3));
console.log(switchstatement(4));