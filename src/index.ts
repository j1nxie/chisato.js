import { Client, GatewayIntentBits, Collection } from "discord.js";
import * as dotenv from "dotenv";
import { readdirSync } from "fs";
import { join } from "path";
import type { SlashCommand } from "./types";

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.slashCommands = new Collection<string, SlashCommand>();
client.cooldowns = new Collection<string, number>();

const handlersDir = join(__dirname, "./handlers");

const files = readdirSync(handlersDir);

for (const file of files) {
	require(`${handlersDir}/${file}`)(client);
}

try {
	void client.login(process.env.DISCORD_TOKEN);
} catch (err) {
	console.error(`Failed to properly boot: ${err}`);
	process.exit(1);
}
