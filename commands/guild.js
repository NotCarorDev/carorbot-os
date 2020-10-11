const { Command } = require('discord.js-commando');

module.exports = class GuildCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'guild',
			group: 'main',
			memberName: 'guild',
            description: 'Replies with a something.',
            throttling: {
                usages: 5,
                duration: 10,
            },
		});
	}

	run(message) {
		return message.say(this.client.guilds.cache.size);
	}
};