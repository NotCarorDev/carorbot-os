const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meow',
			group: 'main',
			memberName: 'meow',
            description: 'Replies with a OK',
            throttling: {
                usages: 2,
                duration: 10,
            },
		});
	}

	run(message) {
		return message.say('OK...     MEOW!');
	}
};