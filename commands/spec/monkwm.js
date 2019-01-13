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
            .addField("**TellMeWhen**", "[Скачать](http://wago.io/N173IReX7)", true)
            .addField("**some addons **", "[Battle for Azeroth](https://wago.io/N173IReX7)", true)
            .setImage("https://wowanalyzer.com/static/media/weirdnelfandherfriend.8a538218.png")
            .setDescription ("Addons")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkwmCommand;
