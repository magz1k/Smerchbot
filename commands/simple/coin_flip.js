const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Орел или Решка'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0){
            message.reply("Орел");
        }
        else
        {
            message.reply("Решка");
        }
    }
}

module.exports = CoinFlipCommand;