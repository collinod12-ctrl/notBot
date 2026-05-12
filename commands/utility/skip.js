const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips the currently playing track.'),

    async execute(interaction) {

        const client = interaction.client;
        const queue = client.player.nodes.get(interaction.guild);

        if (!queue || !queue.currentTrack) {
            return await interaction.reply({
                content: 'There is no music currently playing.',
                flags: MessageFlags.SuppressNotifications
            });
        }

        const currentTrack = queue.currentTrack;

        try {
            queue.node.skip();

            await interaction.reply({
                content: `Skipped: **${currentTrack.title}**`,
                flags: MessageFlags.SuppressNotifications
            });

        } catch (error) {
            console.error('Error skipping track:', error);

            await interaction.reply({
                content: 'An unexpected error occurred while trying to skip the track.',
                flags: MessageFlags.SuppressNotifications
            });
        }
    },
};