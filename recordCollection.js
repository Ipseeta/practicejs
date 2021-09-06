var collection = {
    "1234" : {
        "album" : "Kaho na pyaar hai",
        "artist" : "Rajesh Roshan",
        "tracks" : [
            "dil mera sunn ne ko",
            "chand sitare phool aur",
            "kaho na pyaar hai"
        ]
    },
    "2345" : {
        "album" : "kuch kuch hota hai",
        "artist" : "Jatin Lalit",
        "tracks" : [
            "Ladki badi aanjani hai",
            "mujhko kya hua hai",
            "kuch kuch hota hai"
        ]
    },
    "3456" : {
        "artist" : "Jubin Nautiyal"
    },
    "4567" : {
        "album" : "K3G"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(3456, "tracks", "Rata Lambiyan");
updateRecords(3456, "tracks", "To aa gaye hum");
updateRecords(3456, "album", "Jubin album");
updateRecords(4567, "artist", "Aadesh Shrivastava");
updateRecords(4567, "tracks", "");
console.log("Original collection", collectionCopy);
console.log("Modified collection", collection);
