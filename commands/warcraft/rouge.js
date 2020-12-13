const commando = require('discord.js-commando');
const discord = require('discord.js');

class RougeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rouge', 
            group: 'warcraft',
            memberName: 'rouge', 
            description: 'класс разбойник' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Разбойник")
            .addField("<:dd:567647267578707988> **Assassination**", "[ссылка на гайд](https://www.icy-veins.com/wow/assassination-rogue-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Outlaw**", "[ссылка на гайд](https://www.icy-veins.com/wow/outlaw-rogue-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Subtlety**", "[ссылка на гайд](https://www.icy-veins.com/wow/subtlety-rogue-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#fff35e")
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640463016722433/9_2_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = RougeCommand;