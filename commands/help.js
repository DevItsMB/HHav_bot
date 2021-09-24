const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const botname = require('../config.json');


module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {

        const embed = new MessageEmbed()
        .setColor('#1b2838')
        .setAuthor(`${config.botname}`, message.guild.iconURL(
                { format: 'png', size: 512 }
                    )
                )        
        .setDescription(`Send a command of your choice with the prefix "**${config.PREFIX}**" into the channel.`)
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ Utility', value: '`help`, `credits`, `me`', inline: true },
        { name: '❯ VATSIM', value: '`net`, `tfc`, `atis`, `metar`, `stats`, `spy`', inline: true },
        { name: '❯ Restricted', value: '`rs`', inline: false },
        

        )
///        .addField('Inline field title', 'Some value here', true)


        .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);
        message.channel.send(embed);
    }
};