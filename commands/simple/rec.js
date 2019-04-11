const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rec',
            group: 'simple',
            memberName: 'rec',
            description: 'Информация для Рекрута'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Гильдия «СМЕРЧ» Cвежеватель Душ [Орда]")
            .addField("Офицеры", "Фтучка, Васятха, Науретанец", true)
            .addField("Рейд Тайм", "Пн. Ср. Чт. Вс. с 21:30 до 00:00", true)
            .addField("Рекрутинг", "ДД: Маг, Лок, Сова, ДК. Хил: ХолиДЦ. Наш коллектив будет рад всем желающим присоединиться и продолжить покорять новое дополнение в наших рядах", true)
            .addField("Требования", "• itmlvl 390+ • **__Возможность посещения более 95% рейдов__** • Быть подготовленным к боссу - ознакомится в атласе, прочитать тактику, посмотреть видео гайды. • Адекватное понимание рейдовой политики и решений руководства гильдии (у нас практикуются ротации и замены), • Согласие с #правила-гильдии", true)
            .addField("Аддоны", "Настроенную   - BigWigs и DBM - Exorsus Raid Tools - WA и TMW - RCLootCouncil  Astral Keys", true)
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://cdn.discordapp.com/attachments/519132230010929153/566030996592525332/6_Pre.png")
            .setURL("https://discord.gg/5nWU3q6")
            .setFooter("(c) Smerch Bot")


            message.channel.sendEmbed(myinfo);
            message.delete();
    }
}
module.exports = InfoCommand;
