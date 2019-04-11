const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'guild',
            group: 'simple',
            memberName: 'guild',
            description: 'Информация о Гильдии'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("C М Е Р Ч")
            .addField("Офицеры", "Фтучка, Васятха, Науретанец", true)
            .addField("Рейд Тайм", "Пн. Ср. Чт. Вс. с 21:30 до 00:00", true)
            .addField("Аддоны", "BigWigs | DBM - Exorsus Raid Tools - WA | TMW - RCLootCouncil | Astral Keys", true)
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://cdn.discordapp.com/attachments/497545607981039626/566009400620220433/smerch_horde_3.png")
            .setURL("https://discord.gg/5nWU3q6")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = InfoCommand;
