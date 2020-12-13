const commando = require('discord.js-commando');
const discord = require('discord.js');

class WarriorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'warrior', 
            group: 'warcraft',
            memberName: 'warrior', 
            description: 'класс воин' 
        });
    }

    async run(message , args)
    {
        var myinfo = new discord.RichEmbed()
            .setTitle("Класс Воин")
            .addField("<:dd:567647267578707988> **Arms**", "[ссылка на гайд](https://www.icy-veins.com/wow/arms-warrior-pve-dps-guide)", true)
            .addField("<:dd:567647267578707988> **Fury**", "[ссылка на гайд](https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide)", true) 
            .addField("<:tank:567647267171991564> **Protection**", "[ссылка на гайд](https://www.icy-veins.com/wow/protection-warrior-pve-tank-guide)", true) 
            .setDescription ("Выберите спек")
            .setColor("#a68569")
            .setThumbnail("https://media.discordapp.net/attachments/567294684771254272/568417779871383553/7_5_.png")
            .setFooter("(c) Smerch Bot")
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = WarriorCommand; 