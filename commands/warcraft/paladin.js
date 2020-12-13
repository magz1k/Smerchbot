const commando = require('discord.js-commando');
const discord = require('discord.js');

class PaladinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'paladin', 
            group: 'warcraft',
            memberName: 'paladin', 
            description: 'класс паладин' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Паладин")
            .addField("<:tank:567647267171991564> **Protection**", "[ссылка на гайд](https://www.icy-veins.com/wow/protection-paladin-pve-tank-guide)", true)
            .addField("<:heal:567647266962276352> **Holy**", "[ссылка на гайд](https://www.icy-veins.com/wow/holy-paladin-pve-healing-guide)", true) 
            .addField("<:dd:567647267578707988> **Retribution**", "[ссылка на гайд](https://www.icy-veins.com/wow/retribution-paladin-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#f087a2")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417861219909633/9_6_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = PaladinCommand;