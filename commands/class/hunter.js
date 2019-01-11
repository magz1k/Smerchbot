const commando = require('discord.js-commando');
const discord = require('discord.js');

class HunterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hunter',
            group: 'class',
            memberName: 'hunter',
            description: 'класс Охотник'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Охотник")
            .addField("**Стрельба**", "*!huntermm*", true)
            .addField("**Выживание**", "*!huntersu*", true)
            .addField("**Повелитель зверей**", "*!hunterbm*", true)
            .setDescription ("Выберите спек")
            .setColor("#a1ce53")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/4/4e/Ui-charactercreate-classes_hunter.png?version=f4bba4b664997085ca8dc3f9679652de")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = HunterCommand;
