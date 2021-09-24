const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
//const moment = require('moment');

module.exports = {
	name: 'me',
    description: 'me!',
	execute(message, args) {


        const embed = new MessageEmbed() 
        .setTitle(`${message.member.user.tag} Information`) 
        .setColor('#1b2838')
        .setThumbnail(message.author.displayAvatarURL(
            { format: 'png', size: 512 }
            )
        )
        .addFields(
            { name: '❯ Username', value: `\`${message.member.user.tag}\``, inline: true },
            { name: '❯ Status', value: `\`${message.member.user.presence.status}\`*`, inline: true },
            { name: '❯ Created', value: `${message.member.user.createdAt}`, inline: false },
            
            //{ name: '❯ Joined', value: `$${moment.utc(message.member.user.joinedAt).format("dddd, MMMM Do YYYY")}`, inline: false },


            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

        )
        .setFooter(`UserName ${message.member.user.tag} | UserID ${message.member.id} | *:bugged`);
        message.channel.send(embed);

    },
};