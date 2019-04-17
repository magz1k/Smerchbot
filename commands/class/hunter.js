const commando = require('discord.js-commando');
const discord = require('discord.js');

class HuntCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hunter',
            group: 'class',
            memberName: 'hunter',
            description: 'Класс Охотник'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Охотник")
            .addField("1", "2", true)
            .addField("3", "4", true)
            .addField("5", "6", true)
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640453227347969/7_8_.png")
            .setURL("https://discord.gg/5nWU3q6")
            .setFooter("(c) Smerch Bot")
            message.channel.sendEmbed(myinfo);
            message.delete();
    }
}
module.exports = HuntCommand;
