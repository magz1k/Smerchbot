const commando = require('discord.js-commando');

class JoinTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'whois',
            group: '',
            memberName: 'whois',
            description: '?'
        });
    }

    async run(message, args)
    {
      
let snekfetch = require('snekfetch')


module.exports.run = (bot, message, args, discord) => {
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.")
  let embed = new discord.RichEmbed()
  .setTitle(`Who is ${member.user.username}?`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Whois ROBLOX Lookup")
    snekfetch.get(`https://verify.eryn.io/api/user/${member.id}`)
    .then(response => {
      if (response.body.status == "ok") {
        message.channel.send(`Okay, now looking up ${member.user.username} on ROBLOX...`).then(m => m.delete(5000))
        setTimeout(() => {
          embed.setDescription(`Done! I found ${member.user.username} on ROBLOX! His/her username is ${response.body.robloxUsername}, and his/her ID is ${response.body.robloxId}.`)
          message.channel.send({embed: embed})
        }, 5000)   
      }
  }).catch(err => {
    message.channel.send(`I couldn't find ${member.user.username} on ROBLOX...`)
    console.error(err)
  })
}


    }
}
module.exports = WhoisCommand;
