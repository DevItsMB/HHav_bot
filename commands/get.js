const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name: 'get',
	description: 'get!',
	execute(message, args) {
		
        
        const CIDstats = axios.get('https://api.vatsim.net/api/ratings/1574999/rating_times/')
        console.log(CIDstats.data);
        
        
        
        message.channel.send(CIDstats.data.cid);
	},
};