const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client()

const SELF_ID = "385215471986802688";
const SECRET_SANTA = "649749177726795786"
const BOT_SHIT = "385214373905301506";
let ID_MAP = null;

client.on('ready', () => {
    fs.readFile('./atMentions.json', (err, map) => {
        if(err) {
            console.log(err);
        } else {
            ID_MAP = JSON.parse(map);
        }
    });
    console.log("Connected as " + client.user.tag)
})

client.on('message', message => {
    if(message.channel.type == "dm" && message.author.id !== SELF_ID) {
        client.channels.get(SECRET_SANTA).send(parseAtMention(message.content));
    }
})

function parseAtMention(message) {
    let newMessage = message;
    for( let key of Object.keys(ID_MAP)) {
        newMessage = newMessage.replace(key, ID_MAP[key]);
    };
    return newMessage;
}







// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "Mzg1MjE1NDcxOTg2ODAyNjg4.XfgiUw.bkv0MRZVot1RRmPiqlXozsXHBNU";

client.login(bot_secret_token).catch(console.error);