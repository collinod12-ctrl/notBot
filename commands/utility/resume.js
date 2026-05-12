const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resumes the paused song.'),

    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue) {
            return await interaction.reply({
                content: 'There is no music playing.',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        if (!queue.node.isPaused()) {
            return await interaction.reply({
                content: 'The music is not paused.',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        try {
            queue.node.resume();
            await interaction.reply({
                content: 'Music has been resumed.',
                flags: MessageFlags.SuppressNotifications,
            });
        } catch (error) {
            console.error('Error resuming:', error);
            await interaction.reply({
                content: 'There was an error resuming the music.',
                flags: MessageFlags.SuppressNotifications,
            });
        }
    },
};