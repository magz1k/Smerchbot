const commando = require('discord.js-commando');

class AffCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'aff',
            group: 'simple',
            memberName: 'aff',
            description: 'affixes'
        });
    }
}

module.exports = AffCommand;
