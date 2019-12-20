const bootUp = require('./botInstance');
const MAP = require('./token.json')
const characters = MAP.characters;
for( let key of Object.keys(characters)) {
    bootUp(characters[key].token);
};


