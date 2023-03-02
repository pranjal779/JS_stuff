var collection = {
    "2548": {
        "album": "sddfa",
        "Artist": "asda",
        "track": [
            "dfagag",
            "gaeryterij"
        ]
    },
    "2568": {
        "album": "sdzsdfa",
        "Artist": "asdavd",
        "track": [
            "dfagauwg",
            "gaeryteqbrij"
        ]
    },
    "1548": {
        "Artist": "asda",
        "track": [ ]
    },
    "2548": {
        "album": "sddfa",
        "Artist": "asda",
        "track": [
            "dfagag",
            "gaeryterij"
        ]
    },
    "71823": {
        "album": "uuu ooo"
    }
        
}

// keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if(prop === "tracks") {
        
    }
    
    
    return collection;
}

// Alter values below to test your code
updateRecords(1548, "Artist", "ABBA")