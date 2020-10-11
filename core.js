const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '+',
	owner: '608949424567091210',
    invite: 'https://discord.gg/PXeB4fT',
    unknownCommandResponse: false,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['main', 'Our main cmd group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with commands');
});

client.on('error', console.error);

client.login('noice');