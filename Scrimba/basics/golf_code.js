var names = ["lll", "iii", "ooo", "yyy", "qqq", "zzz", "bbb"]
function scores(par, strokes){
    if(strokes == 1){
        return names[0]
    }
    else if(strokes <= par - 2){
        return names[1]
    }
    else if(strokes == par - 1){
        return names[2]
    }
    else if(strokes == par){
        return name[3]
    }
    else if(strokes == par + 1){
        return names[4]
    }
    else if(strokes == par + 2){
        return names[5]
    }
    else if(strokes >= par + 3){
        return names[6]
    }
}

console.log("1st: " + scores(3, 5));
console.log("2nd: " + scores(6, 5));
console.log("3rd: " + scores(6, 4));
console.log("4th: " + scores(3, 9));