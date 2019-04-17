module.exports = {
    name: 'guild',
    description: 'Retrieves guild information from Blizzard',
    alias: ['guildinfo', 'ginfo', 'ghelp'],
    args: true,
    usage: '[achievements]',
    guildOnly: false,

    async execute(message, args) {
        message.reply(blizzard.name);
    },

    async members(message, args) {
        let response = await message.client.blizzard.guild.getMembers(message);
        message.reply(response.sort().join(`, `));
    },

    async guildAuthenticate(message, args) {
        //blizzard.generateToken(message);
        message.reply(`${message.client.btoken} expires in ${new Date(message.client.expires).toString()}`);
    },

    async achievements(message, args) {
        let response = await message.client.blizzard.guild.getAchievements(message);
        message.reply(response.sort().join(`, `));
    }
};
