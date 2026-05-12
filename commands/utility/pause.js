const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pauses the current song.'),

    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue) {
            return await interaction.reply({
                content: 'There is no music playing.',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        if (queue.node.isPaused()) {
            return await interaction.reply({
                content: 'The music is already paused.',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        try {
            queue.node.pause();
            await interaction.reply({
                content: 'Music has been paused.',
                flags: MessageFlags.SuppressNotifications,
            });
        } catch (error) {
            console.error('Error pausing:', error);
            await interaction.reply({
                content: 'There was an error pausing the music.',
                flags: MessageFlags.SuppressNotifications,
            });
        }
    },
};