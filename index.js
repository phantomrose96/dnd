const fs = require('fs');
const bootUp = require('./botInstance');
let MAP = null;

fs.readFile('./loadfile.json', (err, map) => {
    if(err) {
        console.log(err);
    } else {
        MAP = JSON.parse(map);
    }
});

setTimeout(() => {
    const characters = MAP["characters"];
    for( let key of Object.keys(characters)) {
        bootUp(characters[key]["token"]);
    };
}, 200);

