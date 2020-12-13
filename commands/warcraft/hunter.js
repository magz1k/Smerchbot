const commando = require('discord.js-commando');
const discord = require('discord.js');

class HunterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hunter', 
            group: 'warcraft',
            memberName: 'hunter', 
            description: 'класс охотник' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Охотник")
            .addField("<:dd:567647267578707988> **Beast Mastery**", "[ссылка на гайд](https://www.icy-veins.com/wow/beast-mastery-hunter-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Marksmanship**", "[ссылка на гайд](https://www.icy-veins.com/wow/marksmanship-hunter-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Survival**", "[ссылка на гайд](https://www.icy-veins.com/wow/survival-hunter-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#a1c152")
            .setThumbnail("https://media.discordapp.net/attachments/521105677234601995/567640453227347969/7_8_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = HunterCommand;