var myObj = {
    gift: "pony",
    pet: "Kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));
console.log(checkObj("hello"));