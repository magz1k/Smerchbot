const commando = require('discord.js-commando');
const discord = require('discord.js');

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
        .setDescription("hello")
        .setColor("#fff000")
        message.channel.sendEmbed(myInfo);
    }
}
module.exports = WarriorCommand;
