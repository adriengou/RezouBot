const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.username === client.user.username){
        return false;
    }

    if(msg.channel.name !== 'bot'){
        msg.delete();
        msg.reply('This is not the right channel')
        return false;
    }

    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

    
});


//Reading token.txt to get the token.
fs.readFile('token.txt', 'utf8', function(err, data){
    if (err) {
        console.log(err);
        return false;
    }
    token = data;
    console.log(`Token: ${token}`)
    client.login(token);
});