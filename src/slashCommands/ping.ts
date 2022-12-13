import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from 'discord.js';

import { SlashCommand } from '../types';

const command: SlashCommand = {
	command: new SlashCommandBuilder()
	.setName('ping')
	.setDescription("Show bot's ping."),

	execute: interaction => {
		interaction.reply({
			embeds: [
				new EmbedBuilder()
				.setDescription(`Pong! \n Ping: ${interaction.client.ws.ping}`)
			]
		})
	},

	cooldown: 10
}

export default command;
