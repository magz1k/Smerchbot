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
            .setDescription ("Выберите спек")
            .setColor("#000000")
    }  
}
module.exports = RougeCommand;
