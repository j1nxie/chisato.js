import { Client, Events, GatewayIntentBits, Collection, PermissionFlagsBits } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';

import { SlashCommand } from './types';
import { token } from '../config.json';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.slashCommands = new Collection<string, SlashCommand>();
client.cooldowns = new Collection<string, number>();

const handlersDir = join(__dirname, "./handlers");
readdirSync(handlersDir).forEach(handler => {
	require(`${handlersDir}/${handler}`)(client);
});

client.login(token);
