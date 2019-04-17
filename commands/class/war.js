const commando = require('discord.js-commando');
const discord = require('discord.js');

class WarrCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'war',
            group: 'class',
            memberName: 'war',
            description: 'класс Воин'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Воин")
            .addField("**Защита**", "*!warp*", true)
            .addField("**Оружее**", "*!wara*", true)
            .addField("**Неистовство**", "*!warf*", true)
            .setDescription ("Выберите спек")
            .setColor("#b9915d")
            .setThumbnail("")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = WarrCommand;
