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
            .setTitle("Гильдия «СМЕРЧ» Черный Шрам [Альянс]")
            .addField("Офицеры", "Фтучка, Васятха, Науретанец, Михаря, Павилика", true)
            .addField("Рейд Тайм", "Пн. Вт. Ср. Чт. Пт. Сб. Вс. с 20:30 до 20:00", true)
            .addField("Рекрутинг", "Все классы. Наш коллектив будет рад всем желающим присоединиться и продолжить покорять новое дополнение в наших рядах", true)
            .addField("Требования", "• itmlvl 375+ и Шея 27+ • Возможность посещения более 95% рейдов • Стабильный интернет, FPS(~30+) в рейде, • Стабильный интернет, FPS(~30+) в рейде, • Быть подготовленным к боссу - ознакомится в атласе, прочитать тактику, посмотреть видео гайды. • Адекватное понимание рейдовой политики и решений руководства гильдии (у нас практикуются ротации и замены), • Заинтересованность и возможность принятия участия в PTR тестировании нового контента", true)
            .addField("Аддоны", "Настроенную   - BigWigsи DBM - Exorsus Raid Tools - WA и TMW - RCLootCouncil  Astral Keysç", true)
            .setDescription ("Информация о гильдии")
            .setColor("#ff000a")
            .setThumbnail("https://cdn.discordapp.com/attachments/519132230010929153/521114484341997588/icon.png")
            .setURL("https://discord.gg/5nWU3q6")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
            message.delete();
    }
}
module.exports = InfoCommand;