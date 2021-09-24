module.exports = {
	name: 'auth',
	description: 'auth!',
	execute(message, args) {
        
        if (message.author.id !== '393729314983510018') {
            return message.channel.send(`You cannot use this command!`)
        }
        message.delete(1000);
        message.channel.send('Pong.');
	},
};