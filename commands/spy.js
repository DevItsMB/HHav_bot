const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const { handler } = require('vatsim-data-handler');

module.exports = {
  name: 'spy',
  description: 'spy',
  async execute(message, args) {

    args.shift();
    const query = args.join(' ') !== undefined ? args.join(' ').toUpperCase() : null;  

    //const query = args[1] !== undefined ? args[1].toUpperCase() : null;
  

    if (query === null) return message.channel.send(`Please specify Callsign`);
    //if (query == undefined) return message.channel.send(`Data for \`${query}\` currently not available`);

    try {
      const item = await handler.getFlightInfo(query);
      //console.log(item);

      if (item !== undefined) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`VATSIM Data for ${query}`)
        .setColor('#1b2838')
        .addFields(
          { name: '❯ Callsign', value: `${item.callsign}`, inline: true },
          //{ name: '\u100B', value: '\u100B', inline: true},
          { name: '❯ CID', value: `${item.cid}`, inline: true },
          { name: '❯ Name', value: `${item.name}`, inline: true },
          { name: '❯ Depature', value: `${item.flight_plan.departure}`, inline: true },
          { name: '❯ Arrival', value: `${item.flight_plan.arrival}`, inline: true },
          { name: '❯ Transponder', value: `${item.transponder}`, inline: true },
          { name: '❯ Latitude', value: `${item.latitude}`, inline: true },
          { name: '❯ Longitude', value: `${item.longitude}`, inline: true },
          { name: '❯ Altitude', value: `${item.altitude} ft`, inline: true },
          { name: '❯ Ground Speed', value: `${item.groundspeed}`, inline: true },
          { name: '❯ Cruising Speed', value: `${item.flight_plan.cruise_tas}`, inline: true },
          { name: '❯ Cruising Level', value: `${item.flight_plan.altitude} ft`, inline: true },
          { name: '❯ Departure Time', value: `${item.flight_plan.deptime}`, inline: true },
          { name: '❯ EET', value: `${item.flight_plan.enroute_time}`, inline: true },
          { name: '❯ Aircraft', value: `${item.flight_plan.aircraft}`, inline: true },
          { name: '❯ Route', value: `${item.flight_plan.route}`, inline: false },
          { name: '❯ Remarks', value: `${item.flight_plan.remarks}`, inline: false },
        )
        .setFooter(`Last updated: ${item.last_updated} | Source: status.vatsim.net`)
        
        message.channel.send(embed);
      } else {
        message.channel.send(`Data for \`${query}\` currently not available`);
      }
    } catch (err) {
      //console.error(err);
      message.channel.send("Error: Callsign Not found! Please provide the correct name. Make sure that the aircraft is airborne and has a filed flight plan.");
    }
  },
};