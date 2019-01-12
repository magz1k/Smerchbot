const commando = require('discord.js-commando');
const discord = require('discord.js');

class MonkwmCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'monkmw',
            group: 'class',
            memberName: 'monkmw',
            description: 'Монах Ткач туманов'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
                .setAuthor(`Hibiki | 響`, client.user.avatarURL)
                .addField(`Version`, `1.0`, true)
                .addField(`Node JS`, `8.11.3`, true)
                .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
                .addField(`Uptime`, `${uptime}`, true)
                .addField(`Servers`, `${client.guilds.size}`, true)
                .addField(`Users`, `${client.users.size}`, true)
                .addField(`Website`, `[hibikimoe.xyz](https://hibikimoe.xyz/)`, true)
                .addField(`Discord`, `[hibikimoe.xyz/discord](https://discord.gg/NNwzMm)`, true)
                .addField(`Invite`, `[Not available yet](https://discord.gg/NNwzMm)`, true)
                .addField(`Developer`, `Steve2312#0431`, true)
                .setFooter("Prefix: ! | This bot is still under construction", "https://a.ppy.sh/5414370_1530431526.jpeg")
            .setColor("#03ff8b")
            .setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/24/Ui-charactercreate-classes_monk.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = MonkwmCommand;
