const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkmwCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monkmw',
            group: 'class',
            memberName: 'monkmw',
            description: 'класс Monk'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Монк")
            .addField("**Заголовок 1**", "*какой-то текст или ссылка*", true)
            .addField("**Заголовок 1**", "*какой-то текст или ссылка*", true)
            .addField("**Заголовок 1**", "**какой-то текст или ссылка*", true)
            .setDescription ("- Ткач туманов")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkmwCommand;
