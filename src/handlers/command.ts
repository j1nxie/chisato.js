import { Client, Routes, SlashCommandBuilder } from 'discord.js';
import { REST } from '@discordjs/rest';
import { readdirSync } from 'fs';
import { join } from 'path';

import { SlashCommand } from '../types';
import { token, clientId } from '../../config.json';

module.exports = (client: Client) => {
	const slashCommands: SlashCommandBuilder[] = [];

	let slashCommandsDir = join(__dirname, "../slashCommands");

	readdirSync(slashCommandsDir).forEach(file => {
		if (!file.endsWith('.js')) {
			return;
		}

		let command: SlashCommand = require(`${slashCommandsDir}/${file}`).default;
		slashCommands.push(command.command);
		client.slashCommands.set(command.command.name, command);
	});

	const rest = new REST({ version: '10' }).setToken(token);

	rest.put(Routes.applicationCommands(clientId), {
		body: slashCommands.map(command => command.toJSON())
	}).then((data: any) => {
		console.log(`Successfully loaded ${data.length} slash commands.`);
	}).catch(e => {
		console.log(e);
	});
}
