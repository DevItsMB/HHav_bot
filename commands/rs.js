const TOKEN = process.env.DISCORD_BOT_TOKEN;
const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const botname = require('../config.json');

module.exports = {
	name: 'rs',
	description: 'rs!',
	execute(message, args) {

              if (message.member.hasPermission("ADMINISTRATOR")) {
                
    
              const now = new Date()
              const embed = new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/emojis/707213070375714878.png?v=1')
              .setColor('#1b2838')
              .setAuthor(`${config.botname}`, message.guild.iconURL(
              { format: 'png', size: 512 }
                  )
              )        
              .setDescription(`${message.author} | \`${message.author.id}\` has restarted the services.\n Time: \`${now.toUTCString()}\``)
              .setFooter(`Version: ${config.ver} | Developer: ItsMB#5946`);  
              message.channel.send(embed);
              bot.destroy();
                bot.login(TOKEN)
                bot.on('ready', () => {
                    console.info(`Logged in as ${bot.user.tag}!`);
                
                });

                  console.log(now.toUTCString())
                  bot.on('ready', () => {
                    console.log("All commands loaded!");
                });
              
              } else {
                message.channel.send(`\`Error 104: Insufficient Permissions\``)
              }
            ;
    	},
};