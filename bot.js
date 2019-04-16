const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client();

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'ЗА ОРДУ!',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerGroup('class', 'Сlass');
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
    else if(message.content == 'Альянс')
    {
        message.channel.sendMessage(message.author + 'наверное **Орда**');
    }
});

var badWords = [
  'сука',
  'бля',
  'блять',
  'мудак'
];

bot.on('message', message => {
  var words = message.content.toLowerCase().trim().match(/\w+|\s+|[^\s\w]+/g);
  var containsBadWord = words.some(word => {
    return badWords.includes(word);
  });
  if (containsBadWord) {
    message.delete(1);
    message.channel.send("Сообщение удалено! содержит нецензурные слова");
  }
});

bot.on('message', message => {
var tabHello = ['hi','hello','Hello', 'привет', 'Привет'];
var tabAnsw = ['привет','хеллоу','hello', 'Bonjour епт' + message.author + ', чем могу помочь ?'];
var content = message.content.split(' ');

for(var x = 0; x < content.length; x++){
    if(tabHello.includes(content[x]) && message.isMentioned(client.user)){
        var row = Math.floor(Math.random() * tabAnsw.length);
        message.channel.send(tabAnsw[row]);
        }
    }
};


bot.on('voiceStateUpdate', (oldMember, newMember) => {
    // Here I'm storing the IDs of their voice channels, if available
    let oldChannel = oldMember.voiceChannel ? oldMember.voiceChannelID : null;
    let newChannel = newMember.voiceChannel ? newMember.voiceChannelID : null;
    if (oldChannel == newChannel) return; // If there has been no change, exit
  
    // Here I'm getting the bot's channel (bot.voiceChannel does not exist)
    let botMember = oldMember.guild.member(bot.user),
      botChannel = botMember ? botMember.voiceChannelID : null;
  
    // Here I'm getting the channel, just replace VVV this VVV with the channel's ID
    let textChannel = oldMember.guild.channels.get('525481284584079360');
    if (!textChannel) throw new Error("That channel does not exist.");
  
    // Here I don't need to check if they're the same, since it would've exit before
    if (newChannel == botChannel) {
      // console.log("A user left.");
      textChannel.send(`${newMember} Leave.`);
    } else if (oldChannel == botChannel) {
      // console.log("A user join.");
      textChannel.send(`${newMember} Join.`);
    }
  });


bot.on('ready', function(){
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);
