const { SlashCommandBuilder, MessageFlags } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays a track, playlist, or album from SoundCloud.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('track')
                .setDescription('Play a single track from SoundCloud.')
                .addStringOption(option =>
                    option
                        .setName('query')
                        .setDescription('The URL or search query of the track')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('playlist')
                .setDescription('Play a playlist from SoundCloud.')
                .addStringOption(option =>
                    option
                        .setName('query')
                        .setDescription('The URL or search query of the playlist')
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('album')
                .setDescription('Play an album from SoundCloud.')
                .addStringOption(option =>
                    option
                        .setName('query')
                        .setDescription('The URL or search query of the album')
                        .setRequired(true)
                )
        ),

    async execute(interaction) {
        const client = interaction.client;
        const subcommand = interaction.options.getSubcommand();
        const query = interaction.options.getString('query');
        const queue = await client.player.nodes.create(interaction.guild, {
            metadata: interaction,
        });

        if (!queue.connection) {
            const voiceChannel = interaction.member.voice && interaction.member.voice.channel;
            if (!voiceChannel) {
                return await interaction.reply({
                    content: 'You need to be in a voice channel to use this command!',
                    flags: MessageFlags.SuppressNotifications,
                });
            }
            await queue.connect(voiceChannel);
        }

        console.log('Subcommand:', subcommand);
        console.log('Query:', query);
        const searchResult = await client.player.search(query, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });

        console.log('Search result:', searchResult);
        console.log('Tracks found:', searchResult?.tracks?.length);

        if (!searchResult || !searchResult.tracks.length) {
            return await interaction.reply({
                content: 'No results found!',
                flags: MessageFlags.SuppressNotifications,
            });
        }

        try {
            const playlistTracks = searchResult.playlist?.tracks?.length ? searchResult.playlist.tracks : searchResult.tracks;
            const firstTrack = playlistTracks[0];
            const shouldPlayFullResult = subcommand !== 'track' && searchResult.playlist?.tracks?.length;

            if (!firstTrack) {
                return await interaction.reply({
                    content: 'No playable tracks were found.',
                    flags: MessageFlags.SuppressNotifications,
                });
            }

            if (shouldPlayFullResult) {
                await queue.play(searchResult);
            } else {
                await queue.play(firstTrack);
            }

            const response = `Added ${playlistTracks.length} track(s) from the ${subcommand} to the queue.`;

            await interaction.reply({
                content: response,
                flags: MessageFlags.SuppressNotifications,
            });
        } catch (error) {
            console.error('Error playing track:', error);
            return await interaction.reply({
                content: 'There was an error trying to play the requested music.',
                flags: MessageFlags.SuppressNotifications,
            });
        }
    },
};