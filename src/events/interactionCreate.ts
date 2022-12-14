import type { BotEvent } from "../types";
import type { Interaction } from "discord.js";

const event: BotEvent = {
	name: "interactionCreate",
	execute: (interaction: Interaction) => {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.slashCommands.get(interaction.commandName);
			const cooldown = interaction.client.cooldowns.get(
				`${interaction.commandName}-${interaction.user.username}`
			);

			if (!command) {
				return;
			}

			if (command.cooldown && cooldown) {
				if (Date.now() < cooldown) {
					void interaction.reply(
						`You have to wait ${Math.floor(
							Math.abs(Date.now() - cooldown) / 1000
						)} seconds to use this command.`
					);
					setTimeout(() => interaction.deleteReply(), 5000);
					return;
				}

				interaction.client.cooldowns.set(
					`${interaction.commandName}-${interaction.user.username}`,
					Date.now() + command.cooldown * 1000
				);
				setTimeout(() => {
					interaction.client.cooldowns.delete(
						`${interaction.commandName}-${interaction.user.username}`
					);
				}, command.cooldown * 1000);
			} else if (command.cooldown && !cooldown) {
				interaction.client.cooldowns.set(
					`${interaction.commandName}-${interaction.user.username}`,
					Date.now() + command.cooldown * 1000
				);
			}

			command.execute(interaction);
		} else if (interaction.isAutocomplete()) {
			const command = interaction.client.slashCommands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				if (!command.autocomplete) {
					return;
				}

				command.autocomplete(interaction);
			} catch (error) {
				console.error(error);
			}
		}
	},
};

export default event;
