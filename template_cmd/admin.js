module.exports = {
	name: 'admin',
	description: 'admin!',
	execute(message, args) {

            if (message.member.hasPermission("ADMINISTRATOR")) {
                message.channel.send('Admin Stuff here')
              } else {
                message.channel.send('Sorry, you cant use that command, If you believe this is an error contact an Admin')
              }
            ;
    	},
};