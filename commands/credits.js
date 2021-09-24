const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const botname = require('../config.json');

module.exports = {
	name: 'credits',
	description: 'credits',
	execute(message, args) {

        const embed = new MessageEmbed()
        .setColor('#1b2838')
        .setAuthor(`${config.botname} Credits`)
        .setThumbnail()
        .addFields(
        { name: '❯ Third Party', value: `${config.botname} uses these third party services.\n [discord.js](https://discord.js.org)\n[api.vatsim.net](https://api.vatsim.net/)\n[status.vatsim.net](https://status.vatsim.net/)\n[vatsim-data-handler](https://www.npmjs.com/package/vatsim-data-handler)`, inline: true },
        { name: `❯ ${config.botname} Dev`, value: '[ItsMB#5946](https://github.com/DevItsMB)', inline: true },
        { name: '❯ Special Thanks', value: 'Thanks to Harrison#6527 for giving me the chance to make this Bot for the Discord Server!', inline: false },
        { name: '❯ Important Notes', value: `This Bot is currently in Beta, I am sorry if you run into some errors.`, inline: true },

        )
        .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946 | All images belong to their respective owners.`);
        message.channel.send(embed);
    }
};