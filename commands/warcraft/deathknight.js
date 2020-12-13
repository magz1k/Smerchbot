const commando = require('discord.js-commando');
const discord = require('discord.js');

class DeathknightCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dk', 
            group: 'warcraft',
            memberName: 'dk', 
            description: 'класс death knight' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Death Knight")
            .addField("<:tank:567647267171991564> **Blood**", "[ссылка на гайд](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide)", true)
            .addField("<:dd:567647267578707988> **Frost**", "[ссылка на гайд](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide)", true) 
            .addField("<:dd:567647267578707988> **Unholy**", "[ссылка на гайд](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#bc1c34")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417827917266971/9_7_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = DeathknightCommand;