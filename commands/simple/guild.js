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
            .addField("Офицеры", "Фтучка, Васятха, Науретанец, Михаря", true)
            .addField("Рейд Тайм", "Пн. Вт. Ср. Чт. Пт. Сб. Вс. с 20:30 до 00:00", true)
            .addField("Аддоны", "BigWigs|DBM - Exorsus Raid Tools - WA|TMW - RCLootCouncil| Astral Keys", true)
            .addField("Шмот", "365+ | Шея 27+", true)
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://cdn.discordapp.com/attachments/519132230010929153/521114484341997588/icon.png")
            .setURL("http://ya.ru")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = InfoCommand;