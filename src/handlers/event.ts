import { readdirSync } from "fs";
import { join } from "path";
import type { BotEvent } from "../types";
import type { Client } from "discord.js";

module.exports = (client: Client) => {
	const eventsDir = join(__dirname, "../events");

	readdirSync(eventsDir).forEach((file) => {
		if (!file.endsWith(".js")) {
			return;
		}

		const event: BotEvent = require(`${eventsDir}/${file}`).default;
		const eventStatus = event.once ?? false;

		if (eventStatus) {
			client.once(event.name, (...args) => {
				event.execute(...args);
			});
		} else {
			client.on(event.name, (...args) => {
				event.execute(...args);
			});
		}

		console.log(`Successfully loaded event ${event.name}`);
	});
};
