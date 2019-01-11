const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monk',
            group: 'monk',
            memberName: 'Monk WA',
            description: 'WeakAurus - Monk'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Монк Хуенк")
            .addField("какойто текст", true)
            .addField("какойто текст2", true)
            .addField("какойто текст3", true)
            .setDescription ("Монки хуенки")
            .setColor("#ff000a")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setURL("https://wago.io/NkzxxOUKW")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkCommand;
