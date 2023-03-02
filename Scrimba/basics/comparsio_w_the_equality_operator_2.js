function compareEquality(a, b){
    if(a === b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

function compareEquality2(a, b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality2(10, "10"));