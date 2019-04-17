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
    else if(message.content == 'daddy')
    {
        message.channel.sendMessage(message.author + '@oldfag#3527 is my daddy');
    }
    else if(message.content == 'Альянс')
    {
        message.channel.sendMessage(message.author + 'наверное **Орда**');
    }
    if(message.content === 'расскажи про медведя')
    {
    let answers = ["Эти древние друиды (жарг. медведи) поклоняются тотему медведа и используют его силу для защиты их сообщества от внешней угрозы. Они любят принимать форму медведя и шататься по диким местам Калимдора. Если их взбесить, они могут показать очень свирепую силу и стойкость. Их магические умения увеличивают боевые навыки и храбрость их союзников.", "Уж и друид теперь не тот,  Он больно стал неполноценным.  Медведь, совух и даже кот В тоске приходят неизменной.", "Друид Страж - (танк, медведь)", "ахахах ты серьезно?))))"]; //массив ответов
    let rand = Math.floor(Math.random()*answers.length); //получаем случайное число от 0 до `кол-ва ответов`
    message.channel.send(answers[rand]);
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

bot.on('ready', function(){
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);
