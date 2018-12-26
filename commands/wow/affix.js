const commando = require('discord.js-commando');

class AffixCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'affix',
            group: 'wow',
            memberName: 'affix',
            description: 'Аффикс'
        });
    }

    async run(message , args)
    {
    
    }
}
module.exports = AffixCommand;
