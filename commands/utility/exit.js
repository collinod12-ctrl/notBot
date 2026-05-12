const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exit')
        .setDescription('Disconnects the bot from the voice channel.'),

    async execute(interaction) {
        const client = interaction.client;
        const queue = client.player.nodes.get(interaction.guild.id);

        if (!queue) {
            return await interaction.reply({
                content: 'The bot is not connected to a voice channel.',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        try {
            client.player.nodes.delete(interaction.guild.id);
            await interaction.reply({
                content: 'Bot has been disconnected from the voice channel.',
                flags: MessageFlags.SuppressNotifications,
            });
        } catch (error) {
            console.error('Error disconnecting:', error);
            await interaction.reply({
                content: 'There was an error disconnecting the bot.',
                flags: MessageFlags.SuppressNotifications,
            });
        }
    },
};