const commando = require('discord.js-commando');
const discord = require('discord.js');

class PriestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'priest', 
            group: 'warcraft',
            memberName: 'priest', 
            description: 'класс прист' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Прист")
            .addField("<:heal:567647266962276352> **Discipline**", "[ссылка на гайд](https://www.icy-veins.com/wow/discipline-priest-pve-healing-guide)", true)
            .addField("<:heal:567647266962276352> **Holy**", "[ссылка на гайд](https://www.icy-veins.com/wow/holy-priest-pve-healing-guide)", true) 
            .addField("<:dd:567647267578707988> **Retribution**", "[ссылка на гайд](https://www.icy-veins.com/wow/shadow-priest-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#ffffff")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417804038963230/9_4_.png ")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = PriestCommand;