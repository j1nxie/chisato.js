import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import type { SlashCommand } from "../types";
import type { Client, SlashCommandBuilder } from "discord.js";

module.exports = (client: Client) => {
	const slashCommands: Array<SlashCommandBuilder> = [];

	const slashCommandsDir = join(__dirname, "../slashCommands");

	const files = readdirSync(slashCommandsDir);

	for (const file of files) {
		if (!file.endsWith(".js")) {
			return;
		}

		const command: SlashCommand = require(`${slashCommandsDir}/${file}`).default;

		slashCommands.push(command.command);
		client.slashCommands.set(command.command.name, command);
	}

	const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN!);

	rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENTID!), {
		body: slashCommands.map((command) => command.toJSON()),
	})
		.then((data: any) => {
			console.log(`Successfully loaded ${data.length} slash commands.`);
		})
		.catch((e) => {
			console.log(e);
		});
};
