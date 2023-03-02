var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunks": "jack"
        }
    }
};

//var gloveBoxContents = undefined;
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)