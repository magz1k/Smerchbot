const commando = require('discord.js-commando');
const discord = require('discord.js');

class RougeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rouge', 
            group: 'class',
            memberName: 'rouge', 
            description: 'класс Rouge' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Rouge")
            .addField("**Assassination**", "[ссылка на гайд на англ](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)", true) 
            .addField("**Outlaw**", "*[ссылка на гайд на англ](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)*", false)
            .addField("**Subtlety**", "*[ссылка на гайд на англ](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)*", false) 
            .addField("**Leveling Up (1-120)**", "[ссылка на гайд](https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#03ff8b") ///тут ненадо
            .setThumbnail("https://media.discordapp.net/attachments/541959166185701396/567983478717546506/9_2small_.png") /// тут ненадо
            .setFooter("(c) Smerch Bot")

            message.channel.sendEmbed(myinfo);
    }
}
module.exports = RougeCommand;
