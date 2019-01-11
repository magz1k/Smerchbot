const commando = require('discord.js-commando');
const discord = require('discord.js');

class PalCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'paladin',
            group: 'class',
            memberName: 'paladin',
            description: 'класс Паладин'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Паладин") /// заголовок
            .addField("**Защита**", "*!palp*", true) ///меняем
            .addField("**Свет**", "*!palh*", true) ///меняем
            .addField("**Воздаяние**", "*!palr*", true) ///меняем
            .setDescription ("Выберите спек")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/8/80/Ui-charactercreate-classes_paladin.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = PalCommand;
