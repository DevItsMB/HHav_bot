const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
const config = require('../config.json');
const botname = require('../config.json');

    module.exports = {
	name: 'bot',
	description: 'bot!',
	execute(message, args) {
    
        const now = new Date()        
        const embed = new MessageEmbed()
        .setColor('#1b2838')
        .setAuthor(`${config.botname}`, message.guild.iconURL(
            { format: 'png', size: 512 }
                )
        )        
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ Version', value: `\`${config.ver}\``, inline: false },
        { name: '❯ Library', value: 'discord.js', inline: false },
        { name: '❯ Developer', value: '[ItsMB](https://github.com/DevItsMB)', inline: false },

        { name: '\u200B', value: '\u200B' },

        { name: '❯ Shards', value: '`0` of `1`', inline: true },
        { name: '❯ API', value: `${Date.now() - message.createdTimestamp}ms`, inline: true },
        { name: '❯ Memory', value: `${process.memoryUsage().heapUsed} MB`, inline: true },
        )        
        .setFooter(`${config.botname} © 2021`);
        message.channel.send(embed);
    }
};
 //${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);