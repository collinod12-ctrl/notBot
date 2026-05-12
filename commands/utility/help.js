const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription('Provides a list of available commands.'),
    async execute(interaction) {
        await interaction.reply({
            content: `Here are the available commands:\n
- \`/play track\`: Plays a single song from SoundCloud.
- \`/play playlist\`: Plays a playlist from SoundCloud.
- \`/play album\`: Plays an album from SoundCloud.
- \`/server\`: Provides information about the server.
- \`/user\`: Provides information about the user.
- \`/ping\`: Replies with Pong!
- \`/exit\`: Disconnects the bot from the voice channel.
- \`/pause\`: Pauses the current song.
- \`/resume\`: Resumes the paused song.`,
            flags: MessageFlags.SuppressNotifications,
        });
    },
};  