const commando = require('discord.js-commando');
const discord = require('discord.js');

class DruidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'druid',
            group: 'class',
            memberName: 'druid', 
            description: 'класс Друид'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Друид")
            .addField("**Баланс**", "*!druidm*", true) 
            .addField("**Медведь**", "*!druidb*", true)
            .addField("**Дерево**", "*!druidt*", true)
            .addField("**Кот**", "*!druidk*", true) 
            .setDescription ("Выберите спек")
            .setColor("#f6690a")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/6/6f/Ui-charactercreate-classes_druid.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = DruidCommand;
