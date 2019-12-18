const Discord = require('discord.js');
const GENERAL = "656721557741240342";

function bootUp(bot_secret_token) {
    const client = new Discord.Client();

    client.on('ready', () => {
        console.log("logged in as " + client.user.tag)
    });
    
    client.on('message', message => {
        if(message.channel.type == "dm" && message.author.id !== client.user.tag) {
            client.channels.get(GENERAL).send(message.content);
        }
    });

    client.login(bot_secret_token).catch(console.error);
}
    
    

module.exports = bootUp;

