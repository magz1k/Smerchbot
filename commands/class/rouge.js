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
            .setTitle("title ~~(did you know you can have markdown here too?)~~", "https://discordapp.com")
            .addField("🤔", "some of these properties have certain limits...", false)
            .addField("😱", "try exceeding some of them!", false)
            .setDescription ("Выберите спек")
            .setColor("10003140")
        
         message.channel.sendEmbed(myinfo);
    }  
}
module.exports = RougeCommand;
