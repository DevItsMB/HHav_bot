const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const {handler} = require('vatsim-data-handler');

module.exports = {
    name: 'tfc',
    description: 'tfc!',
    execute(message, args) {

        
    handler.getPopularAirports().then(val => {
    const now = new Date()
  
    const embed = new MessageEmbed()
    .setColor('#1b2838')
    .setAuthor('Busy Aiports | VATSIM')
    .setThumbnail('https://file.coffee/u/aKJ859V1OxUcBN.png')
    .setFooter(`${now.toUTCString()} | \nSource: status.vatsim.net | All images belong to their respective owners.`)

        const array = [1, 2, 3];
        embed.addField('❯ ICAO', val.map(x => x.id).join('\n'), true);
        embed.addField('❯ Count', val.map(x => x.count).join('\n'), true);
        //console.log(val)
      
        
        message.channel.send(embed);
    })
    }
};