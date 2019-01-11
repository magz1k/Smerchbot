const commando = require('discord.js-commando');
const discord = require('discord.js');

class MageCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mage',
            group: 'class',
            memberName: 'mage',
            description: 'класс Маг'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Маг")
            .addField("**Огонь**", "*!magefa*", true)
            .addField("**Лёд**", "*!magefr*", true)
            .addField("**Тайная магия**", "*!magesm*", true)
            .setDescription ("Выберите спек")
            .setColor("#5ec5ee")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/56/Ui-charactercreate-classes_mage.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MageCommand;
