const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const { handler } = require('vatsim-data-handler');

module.exports = {
  name: 'atis',
  description: 'atis',
  async execute(message, args) {

    args.shift();
    const query = args.join(' ').toUpperCase();
    try {
      const item = await handler.getAirportInfo(query);
      //console.log(item);

      if (item?.atis !== undefined) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`ATIS for ${query}`)
        .setColor('#1b2838')
        .addFields(
          { name: '❯ Callsign', value: `${item.atis.callsign}`, inline: true },
          { name: '❯ Frequency', value: `${item.atis.frequency}`, inline: true },
          { name: '❯ Code', value: `${item.atis.atis_code}`, inline: true },

          { name: '❯ Text', value: `\`${item.atis.text_atis}\``, inline: true },
        )
        .setFooter(`Last updated: ${item.atis.last_updated} | Not for official briefing | Source: status.vatsim.net`)
        
        message.channel.send(embed);
      } else {
        //message.channel.send(`ATIS data for \`${query}\` currently not available`);
        message.channel.send('Please provide a valid ICAO code. Make sure ATIS is online on VATSIM.')
      }
    } catch (err) {
      console.error(err);
      message.channel.send("Error: ATIS Not found! Please provide the correct name.");
    }
  },
};