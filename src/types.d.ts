import type {
	AutocompleteInteraction,
	Collection,
	CommandInteraction,
	SlashCommandBuilder,
} from "discord.js";

export interface SlashCommand {
	command: SlashCommandBuilder;
	execute: (interaction: CommandInteraction) => void;
	autocomplete?: (interaction: AutocompleteInteraction) => void;
	cooldown?: number;
}

export interface BotEvent {
	name: string;
	once?: boolean;
	execute: (...args) => void;
}

declare module "discord.js" {
	export interface Client {
		slashCommands: Collection<string, SlashCommand>;
		cooldowns: Collection<string, number>;
	}
}
