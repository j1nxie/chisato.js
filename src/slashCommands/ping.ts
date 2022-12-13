import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import type { SlashCommand } from "../types";

const command: SlashCommand = {
	command: new SlashCommandBuilder().setName("ping").setDescription("Show bot's ping."),

	execute: (interaction) => {
		void interaction.reply({
			embeds: [
				new EmbedBuilder().setDescription(`Pong! \n Ping: ${interaction.client.ws.ping}`),
			],
		});
	},

	cooldown: 10,
};

export default command;
