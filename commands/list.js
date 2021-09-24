const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const { handler } = require('vatsim-data-handler');

module.exports = {
  name: 'list',
  description: 'list',
  async execute(message, args) {

    args.shift();
    const query = args.join(' ') !== undefined ? args.join(' ').toUpperCase() : null;  

    //const query = args[1] !== undefined ? args[1].toUpperCase() : null;
    //getAirportInfo(airport)

    if (query === null) return message.channel.send(`Please specify`);
    //if (query == undefined) return message.channel.send(`Data for \`${query}\` currently not available`);

    try {
      const item = await handler.getAirportInfo(query);
      //console.log(item);

      if (item !== undefined) {
        
        const callSings = item.pilots.map(pilot => pilot.callsign).slice(0, 25).toString().replaceAll(',','\n');
        const embed = new Discord.MessageEmbed()
        //console.log(item.pilot.flight_plan)
        
        .setTitle(`VATSIM Airport Data for ${query}`)
        .setColor('#1b2838')
        .addFields(
          { name: '❯ Callsign', value: `${callSings}`, inline: true },
          //{ name: '\u100B', value: '\u100B', inline: true},
          { name: '❯ CID', value: `${item.atis.rating}`, inline: true },

        )
        .setFooter(`Last updated: ${item.last_updated} | Source: status.vatsim.net`)
        
        message.channel.send(embed);
      } else {
        message.channel.send(`Data for \`${query}\` currently not available`);
      }
    } catch (err) {
      console.error(err);
      message.channel.send("Error: Callsign Not found! Please provide the correct name.");
    }
  },
};