const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const {handler} = require('vatsim-data-handler');

module.exports = {
	name: 'net',
	description: 'net!',
	execute(message, args) {

    handler.getCount('pilots').then(val1 => {
    handler.getCount('controllers').then(val2 => {
    handler.getCount('all').then(val3 => {
      
      const now = new Date();
      const embed = new MessageEmbed()
      .setColor('#1b2838')
      .setAuthor('VATSIM Statistics')
      //.setThumbnail('https://file.coffee/u/FIKs6mjK8Y4150.png')
      .setThumbnail('https://file.coffee/u/aKJ859V1OxUcBN.png')
      .addFields(
      { name: '❯ Pilots', value: val1, inline: true},
      { name: '❯ Controllers', value: val2, inline: true},
      { name: '❯ Total', value: val3, inline: true}


      )
      .setFooter(`${now.toUTCString()} | \nSource: status.vatsim.net | All images belong to their respective owners.`)
      message.channel.send(embed);
    })
    })})}
};