import { token, clientId } from "../../config.json";
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import type { SlashCommand } from "../types";
import type { Client, SlashCommandBuilder } from "discord.js";

module.exports = (client: Client) => {
	const slashCommands: Array<SlashCommandBuilder> = [];

	const slashCommandsDir = join(__dirname, "../slashCommands");

	readdirSync(slashCommandsDir).forEach((file) => {
		if (!file.endsWith(".js")) {
			return;
		}

		const command: SlashCommand = require(`${slashCommandsDir}/${file}`).default;

		slashCommands.push(command.command);
		client.slashCommands.set(command.command.name, command);
	});

	const rest = new REST({ version: "10" }).setToken(token);

	rest.put(Routes.applicationCommands(clientId), {
		body: slashCommands.map((command) => command.toJSON()),
	})
		.then((data: any) => {
			console.log(`Successfully loaded ${data.length} slash commands.`);
		})
		.catch((e) => {
			console.log(e);
		});
};
