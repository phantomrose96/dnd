const Discord = require('discord.js');
const channels = require('./channels.json');

function bootUp(bot_secret_token) {
    const client = new Discord.Client();

    client.on('ready', () => {
        console.log("logged in as " + client.user.tag)
    });
    
    client.on('message', message => {
        if(message.channel.type == "dm") {
            client.channels.get(channels.general).send(message.content);
        }
    });

    client.login(bot_secret_token).catch(console.error);
}
    
    

module.exports = bootUp;

