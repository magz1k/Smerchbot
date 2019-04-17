const commando = require('discord.js-commando');
const discord = require('discord.js');

class WarrCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warrior',
            group: 'class',
            memberName: 'warrior',
            description: 'класс Воин'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Воин")
            .addField("<:tank:567647267171991564>**Защита**", "**", true)
            .addField("<:dd:567647267578707988>**Оружее**", "*!*", true)
            .addField("<:dd:567647267578707988>**Неистовство**", "*!*", true)
            .setDescription ("Выберите спек")
            .setColor("#b9915d")
            .setThumbnail("")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = WarrCommand;
