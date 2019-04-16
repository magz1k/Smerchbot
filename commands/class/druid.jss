const commando = require('discord.js-commando');
const discord = require('discord.js');

class DruidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'druid',
            group: 'class',
            memberName: 'druid', 
            description: 'класс Друид'
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Друид")
            .addField("<:tank:567647267171991564>**Медведь**", "[ссылка на гайд](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)", true)
            .addField("<:dd:567647267578707988>**Баланс**", "[ссылка на гайд](https://www.icy-veins.com/wow/balance-druid-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988>**Кот**", "[ссылка на гайд](https://www.icy-veins.com/wow/feral-druid-pve-dps-guide)", true) 
            .addField("<:heal:567647266962276352>**Дерево**", "[ссылка на гайд](https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide)", true)
            .setDescription ("Выберите спек")
            .setColor("#f6690a")
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640472324014081/9_5_.png")
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = DruidCommand;
