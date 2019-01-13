const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkwmCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monkmw',
            group: 'spec',
            memberName: 'monkmw',
            description: 'Монах Ткач туманов'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Монк - Ткач туманов")
            .addField("**WeakAuras**", "[Скачать](http://wago.io/N173IReX7)", true)
            .addField("**TellMeWhen**", "[Скачать](https://cdn.discordapp.com/attachments/533174103604199435/533352713539420186/MONK_8.1.0_VERSION_1.1.0_DECEMBER_15_2018.txt)", true)
            .addField("**some addons **", "[Battle for Azeroth](https://wago.io/N173IReX7)", true)
            .setImage("https://cdn.discordapp.com/attachments/521105677234601995/533809925714083850/1.gif")
            .setDescription ("Addons")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkwmCommand;
