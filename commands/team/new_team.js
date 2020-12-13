const commando = require('discord.js-commando');

class NewTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'new_team',
            group: 'team',
            memberName: 'new_team',
            description: 'Команды'
        });
    }

    async run(message, args)
    {
        currentTeamMembers = []
        message.reply("Команды сброшены")
    }
}

module.exports = NewTeamCommand;