const commando = require('discord.js-commando');
const discord = require('discord.js')

class WarriorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warrior',
            group: 'class',
            memberName: 'warrior',
            description: 'ВОИН'
        });
    }

    async run(message , args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("some Titel")
        .addField("some Field", true)
        .addField("some Field", true)
        .addField("some Field", false)
        .setDescription("hello")
        .setColor("#fff000")
        .setFooter("bla - bla - bla")
        .setThumbnail(message.author.avatarURL)

    message.channel.sendEmbed(myInfo);
    }
}
module.exports = WarriorCommand;
