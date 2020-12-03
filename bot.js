const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
/////


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('class', 'Class');
bot.registry.registerGroup('class', 'Сlass');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on("guildMemberAdd", function(member)
bot.on ('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello' + message.author + ' how are you ?');
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
    if (message.content === 'расскажи про медведя') {
    // Send "pong" to the same channel
    let answers = ["Эти древние друиды (жарг. медведи) поклоняются тотему медведа и используют его силу для защиты их сообщества от внешней угрозы. Они любят принимать форму медведя и шататься по диким местам Калимдора. Если их взбесить, они могут показать очень свирепую силу и стойкость. Их магические умения увеличивают боевые навыки и храбрость их союзников.", "Уж и друид теперь не тот,  Он больно стал неполноценным.  Медведь, совух и даже кот В тоске приходят неизменной.", "Друид Страж - (танк, медведь)", "ахахах ты серьезно?))))"]; //массив ответов
    let rand = Math.floor(Math.random()*answers.length); //получаем случайное число от 0 до `кол-ва ответов`
    message.channel.send(answers[rand]);
    }
});

bot.on('message', message => {
    message.channel.send("Сообщение удалено! содержит нецензурные слова");
  }
});




bot.on('voiceStateUpdate', (oldMember, newMember) => {
    // Here I'm storing the IDs of their voice channels, if available
    let oldChannel = oldMember.voiceChannel ? oldMember.voiceChannelID : null;
@@ -76,6 +105,7 @@ bot.on('voiceStateUpdate', (oldMember, newMember) => {
    }
  });


bot.on('ready', function(){
    console.log("Ready");
})


////



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
