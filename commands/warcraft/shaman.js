const commando = require('discord.js-commando');
const discord = require('discord.js');

class ShamanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'shaman', 
            group: 'warcraft',
            memberName: 'shaman', 
            description: 'класс шаман' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Шаман")
            .addField("<:dd:567647267578707988> **Elemental**", "[ссылка на гайд](https://www.icy-veins.com/wow/elemental-shaman-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Enhancement**", "[ссылка на гайд](https://www.icy-veins.com/wow/enhancement-shaman-pve-dps-guide)", true) 
            .addField("<:heal:567647266962276352> **Restoration**", "[ссылка на гайд](https://www.icy-veins.com/wow/restoration-shaman-pve-healing-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#3576bc")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417792462684160/7_9_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = ShamanCommand;