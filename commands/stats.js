const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'stats',
  description: 'stats!',
  async execute(message, args) {

    const query = args[1] !== undefined ? args[1].toUpperCase() : null;
    //console.log(query)
    const now = new Date();

    if (query === null) return message.channel.send(`Please specify CID`);

    try {
      const statsResponse = await axios.get(`https://api.vatsim.net/api/ratings/${query}/rating_times/`);
      if (statsResponse?.data !== undefined) {

        const embed = new Discord.MessageEmbed()
          .setTitle(`VATSIM Statistics - CID ${query}`)
          .setColor('#1b2838')
          //.setDescription(`\`${statsResponse.data.id}\``)
          .addFields(
            { name: '❯ Connection time (type)', value: `Pilot: ${statsResponse.data.pilot} hrs\nATC: ${statsResponse.data.atc} hrs\n SUP: ${statsResponse.data.sup} hrs`, inline: true },
            { name: '❯ Detailed ATC time', value: `S1: ${statsResponse.data.s1} hrs\nS2: ${statsResponse.data.s2} hrs\nS3: ${statsResponse.data.s3} hrs\nC1: ${statsResponse.data.c1} hrs\nC2: ${statsResponse.data.c2} hrs\n C3: ${statsResponse.data.c3} hrs`, inline: true },

            )

          .setFooter(`Last updated: ${now.toUTCString()} | Source: api.vatsim.net`)

        message.channel.send(embed);
      } else {
        message.channel.send(`Data for \`${query}\` currently not available`);
      }
    } catch (error) {
      //console.error(error);
      message.channel.send(`Failed to fetch data for \`${query}\``);
    }
  },
};
//https://api.vatsim.net/api/ratings/1574999/rating_times/