const commando = require('discord.js-commando');
const discord = require('discord.js');

class PristCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'prist',
            group: 'class',
            memberName: 'prist',
            description: 'класс Жрец'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Жрец")
            .addField("**Послушание**", "*!pristd*", true)
            .addField("**Свет**", "*!pristh*", true)
            .addField("**Тьма**", "*!prists*", true)
            .setDescription ("Выберите спек")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/0/0f/Ui-charactercreate-classes_priest.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = PristCommand;
