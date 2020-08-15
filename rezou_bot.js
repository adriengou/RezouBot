const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTA0NTc4NDIwNjQ3MjY0MjY2.W9AzRg.AJzBl3pwBdaf37fVl86DhZz0QSM');