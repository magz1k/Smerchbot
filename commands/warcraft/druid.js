const commando = require('discord.js-commando');
const discord = require('discord.js');

class DruidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'druid', 
            group: 'warcraft',
            memberName: 'druid', 
            description: 'класс друид' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Друид")
            .addField("<:tank:567647267171991564> **Guardian**", "[ссылка на гайд](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)", true)
            .addField("<:dd:567647267578707988> **Balance**", "[ссылка на гайд](https://www.icy-veins.com/wow/balance-druid-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Feral**", "[ссылка на гайд](https://www.icy-veins.com/wow/feral-druid-pve-dps-guide)", true) 
            .addField("<:heal:567647266962276352> **Restoration**", "[ссылка на гайд](https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide)", true)
            .setDescription ("Выберите спек")
            .setColor("#ee7020") ///тут ненадо
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640472324014081/9_5_.png") /// тут ненадо
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = DruidCommand;
