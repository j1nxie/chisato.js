import { token } from "../config.json";
import { Client, GatewayIntentBits, Collection } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import type { SlashCommand } from "./types";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.slashCommands = new Collection<string, SlashCommand>();
client.cooldowns = new Collection<string, number>();

const handlersDir = join(__dirname, "./handlers");

readdirSync(handlersDir).forEach((handler) => {
	require(`${handlersDir}/${handler}`)(client);
});

void client.login(token);
