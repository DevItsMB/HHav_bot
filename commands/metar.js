const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'metar',
  description: 'metar',
  async execute(message, args) {

    const query = args[1] !== undefined ? args[1].toUpperCase() : null;
    const now = new Date();

    if (query === null) return message.channel.send(`Please specify METAR ID`);

    try {
      const metarResponse = await axios.get(`https://metar.vatsim.net/metar.php?id=${query}`);
      if (metarResponse?.data !== undefined && metarResponse.data.length > 0) {

        const embed = new Discord.MessageEmbed()
          .setTitle(`METAR for ${query}`)
          .setColor('#1b2838')
          .setDescription(`\`${metarResponse.data}\``)

          .setFooter(`Last updated: ${now.toUTCString()} | Not for official briefing | \nSource: status.vatsim.net`)

        message.channel.send(embed);
      } else {
        message.channel.send(`METAR data for \`${query}\` currently not available`);
      }
    } catch (error) {
      console.error(error);
      message.channel.send(`Failed to fetch METAR data for ${query}`);
    }
  },
};