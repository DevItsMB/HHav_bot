const Discord = require('discord.js');

module.exports = async (bot) => {
    const guild = bot.guilds.cache.get('496068355191734282');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('788512574420287489');
        channel.setName(`Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count | hourly')
    
    }, 3600000);
}

//600000 = 10 mins
//3600000 = 60 mins