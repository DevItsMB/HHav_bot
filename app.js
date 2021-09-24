const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const config = require('./config.json');
const {PREFIX} = require('./config.json');

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    //memberCounter(bot);
    //welcome(bot)
    bot.user.setPresence({ activity: { name: `Version ${config.ver}` , type: "WATCHING"}, status: 'online' })
});

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("All commands loaded!");
});
 
bot.on('message', message => {
    if (message.content[0] !== PREFIX) return;
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case "net":
            bot.commands.get('net').execute(message, args);
        break;
        
        case "tfc":
                bot.commands.get('tfc').execute(message, args);
        break;

        case "help":
            bot.commands.get('help').execute(message, args);
        break;

        case "rs":
            bot.commands.get('rs').execute(message, args);
        break;

        case "bot":
            bot.commands.get('bot').execute(message, args);
        break;

        case "credits":
            bot.commands.get('credits').execute(message, args);
        break;

        case "atis":
            bot.commands.get('atis').execute(message, args);
        break;

        case "metar":
            bot.commands.get('metar').execute(message, args);
        break;

        case "spy":
            bot.commands.get('spy').execute(message, args);
        break;
        
        case "list":
            bot.commands.get('list').execute(message, args);
        break;

        case "stats":
            bot.commands.get('stats').execute(message, args);
        break;

        case "get":
            bot.commands.get('get').execute(message, args);
        break;

        case "me":
            bot.commands.get('me').execute(message, args);
        break;
    }
});


//const memberCounter = require('./counters/member-counter');
//const welcome = require('./welcome')

//const {handler} = require('vatsim-data-handler');

//handler.getAirportInfo('EDDH').then(val => console.log(val));

//axios.get('https://api.vatsim.net/api/ratings/1574999/rating_times/')
//  .then((response) => {
//    console.log(response.data);
//    console.log(response.data.id)
//});