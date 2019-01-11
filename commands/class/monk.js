const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monk',
            group: 'simple',
            memberName: 'Monk',
            description: 'класс Monk'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Монк")
            .addField("**Ткач туманов** - *!monkmw*", true)
            .addField("**Хмелевар** - *!monkbm*", true)
            .addField("**Танцующий с Ветром** - *!monkww*", true)
            .setDescription ("выбирите спек")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkCommand;
