const { Client, Collection, MessageFlags, Events, GatewayIntentBits } = require('discord.js');
const { Player } = require('discord-player');
const { OpusScript } = require('opusscript');
const { DefaultExtractors } = require('@discord-player/extractor');
const { token } = require('./config.json');
const { targetChannelIds } = require('./config.json');
const { generateDependencyReport } = require('@discordjs/voice');

const exitCommand = require('./commands/utility/exit.js');
const helpCommand = require('./commands/utility/help.js');
const pauseCommand = require('./commands/utility/pause.js');
const pingCommand = require('./commands/utility/ping.js');
const playCommand = require('./commands/utility/play.js');
const resumeCommand = require('./commands/utility/resume.js');
const serverCommand = require('./commands/utility/server.js');
const skipCommand = require('./commands/utility/skip.js');
const userCommand = require('./commands/utility/user.js');
console.log(generateDependencyReport());

// Creates a new client instance with the specified intents
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });

//Confirms that the bot is online and logs the username to the console
client.once(Events.ClientReady, async (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
	const { execSync } = require('child_process');

try {
    const version = execSync('yt-dlp --version').toString();
    console.log('yt-dlp version:', version);
} catch (err) {
    console.log('yt-dlp NOT found in PATH');
}
// Loads default extractors for the music player and logs the loaded extractors to the console
	console.log('Loading default extractors...');
    await client.player.extractors.loadMulti(DefaultExtractors);
	console.log(client.player.extractors.store);
	console.log('Default extractors loaded!');
});

// Loads command modules explicitly and sets them in a Collection for easy access when executing commands
client.commands = new Collection();
const commandList = [
	exitCommand,
	helpCommand,
	pauseCommand,
	pingCommand,
	playCommand,
	resumeCommand,
	serverCommand,
	skipCommand,
	userCommand,
];

for (const command of commandList) {
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] A loaded command is missing a required "data" or "execute" property.`);
	}
}

// Initializes the music player and sets up event listeners for error handling and track start notifications
client.player = new Player(client, {
	ytdlOptions: {
		quality: 'highestaudio',
		highWaterMark: 1 << 25,
	},
});

// Event listener for player errors
client.player.events.on('error', (queue, error) => {
    console.error('Player error:', error);
});

// Event listener for track errors
client.player.events.on('playerError', (queue, error) => {
    console.error('Track error:', error);
});

// Event listener for when a track starts playing
client.player.events.on('playerStart', (queue, track) => {
    if (queue.metadata && queue.metadata.followUp) {
        queue.metadata.followUp({ content: `Now playing: ${track.title}`, flags: MessageFlags.SuppressNotifications });
    }
});

// Listens for interactions and executes the corresponding command
client.on(Events.InteractionCreate, async (interaction) => {

	// Check if the interaction is in one of the target channels and directs users to the appropriate channel if not.
	if (!targetChannelIds.includes(interaction.channelId)) {
		const availableChannels = interaction.guild?.channels.cache
			.filter((channel) => targetChannelIds.includes(channel.id))
			.map((channel) => `<#${channel.id}>`)
			.join(', ');

		const channelText = availableChannels && availableChannels.length
			? availableChannels
			: 'the appropriate channel';

		await interaction.reply({
			content: `Please use ${channelText} for bot-commands instead.`,
				flags: MessageFlags.SuppressNotifications,
			});
		return;
	}

	// Only execute commands if the interaction is a chat input command
	if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	// Try to execute the command and catch any errors that occur, replying with an error message if necessary
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: 'There was an error while executing this command!',
				flags: MessageFlags.Ephemeral,
			});
		} else {
			await interaction.reply({
				content: 'There was an error while executing this command!',
				flags: MessageFlags.Ephemeral,
			});
		}
	}
});

// Logs the bot in using the token from the config file
client.login(token);