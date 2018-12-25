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
    member.send("Добро пожаловать в Смерч, ожидайте авторизации. Вас перенесут в нужный канал или авторизуют в определенную группу");
    let memberRole = member.guild.roles.find("name", "Newby");
    member.addRole(memberRole);
});

bot.on ('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello' + message.author + 'how are you ?');
    }
    else if(message.content == "What team")
    {
        var teamInfo = new discord.RichEmbed()
        .setTitle("Current team Members")
        for(var i = 0; i < currentTeamMembers.lenght; i++) 
        {
            teamInfo.addField("Member " + (i+1).toString(),currentTeamMembers[i].username);
        }
        message.channel.send(teamInfo);
    }
    else if(message.content == 'daddy')
    {
        message.channel.sendMessage(message.author + '@oldfag#3527 is my daddy');
    }
});

bot.on("message", function(message) {
  bot.on('voiceStateUpdate', (oldMember, newMember) => {
    console.log('lol');
    let newUserChannel = newMember.voiceChannelID
    let oldUserChannel = oldMember.voiceChannelID
    var channel = client.channelsID.get('525481284584079360');
    if(oldUserChannel === 518000470795747329 && newUserChannel !== 518000470795747329) {
      channel.send('has joined a voice channel');
      // User Joins a voice channel
    } else if(newUserChannel === 518000470795747329){
       channel.send('has left a voice channel');
    // User leaves a voice channel
    }
  })
})
bot.on('ready', function(){
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);
