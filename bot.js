const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client();

bot.on('ready', () => { bot.user.setGame('Бога') })

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on("guildMemberAdd", function(member)
{
    member.send("Добро пожаловать на сервер!");
    let memberRole = member.guild.roles.find("name", "New member");
    member.addRole(memberRole);
});

bot.on ('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello' + message.autor + 'how are you ?');
    }
    else if(message.content == "What team")
    {
        var teamInfo = new discord.RichEmbed()
        .setTitle("Current team Members")
        for(var i = 0; i < currentTeamMembers.lenght; i++) 
        {
            teamInfo.addField("Member" + (i+1).toString(),currentTeamMembers[i].username);
        }
        message.channel.send(teamInfo);
    }
});
   

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);