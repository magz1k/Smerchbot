const commando = require('discord.js-commando');
const discord = require('discord.js');

class DemonhunterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dh', 
            group: 'warcraft',
            memberName: 'dh', 
            description: 'класс demon hunter' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Demon Hunter")
            .addField("<:tank:567647267171991564> **Vengeance**", "[ссылка на гайд](https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-guide)", true)
            .addField("<:dd:567647267578707988> **Havoc**", "[ссылка на гайд](https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide)", true)  
            .setDescription ("Выберите спек")
            .setColor("#992bc2")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417794732064768/7_10_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = DemonhunterCommand;