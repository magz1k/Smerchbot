const commando = require('discord.js-commando');
const discord = require('discord.js');

class PriestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'priest',
            group: 'class',
            memberName: 'priest',
            description: 'класс Жрец'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Жрец")
            .addField("**Послушание**", "*!priestd*", true)
            .addField("**Свет**", "*!priesth*", true)
            .addField("**Тьма**", "*!priests*", true)
            .setDescription ("Выберите спек")
            .setColor("#ffffff")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/0/0f/Ui-charactercreate-classes_priest.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = PriestCommand;
