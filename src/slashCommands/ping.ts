import { SlashCommandBuilder } from "discord.js";
import type { SlashCommand } from "../types";

const command: SlashCommand = {
	command: new SlashCommandBuilder().setName("ping").setDescription("Show bot's ping."),

	execute: (interaction) => {
		void interaction.reply({
			content: `Pong! Ping: ${interaction.client.ws.ping} ms.`,
		});
	},

	cooldown: 10,
};

export default command;
