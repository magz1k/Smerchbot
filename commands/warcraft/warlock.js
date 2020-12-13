const commando = require('discord.js-commando');
const discord = require('discord.js');

class WarlockCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warlock', 
            group: 'warcraft',
            memberName: 'warlock', 
            description: 'класс варлок' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Варлок")
            .addField("<:dd:567647267578707988> **Affliction**", "[ссылка на гайд](https://www.icy-veins.com/wow/affliction-warlock-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Demonology**", "[ссылка на гайд](https://www.icy-veins.com/wow/demonology-warlock-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Destruction**", "[ссылка на гайд](https://www.icy-veins.com/wow/destruction-warlock-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#8a76b4")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417787106820106/7_7_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = WarlockCommand;
