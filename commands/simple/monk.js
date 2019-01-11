const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monk',
            group: 'simple',
            memberName: 'monk',
            description: 'класс Monk'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Монк")
            .addField("Monk - **!monk**", true)
            .addField("Brewmaster Monk - **!monkbm**", true)
            .addField("Windwalker Monk - **!monkww*", true)
            .setDescription ("выбирите спек")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkCommand;
