const bootUp = require('./botInstance');
const MAP = require('./token.json') 
for( let char of MAP.characters) {
    bootUp(char.token);
};




