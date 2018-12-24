const commando = require('discord.js-commando');

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'simple',
            memberName: 'avatar',
            description: 'Аватарка'
        });
    }

    async run(message , args)
    {
        message.reply(message.author.avatarURL)
        message.delete();
    }
}
module.exports = AvatarCommand;