const commando = require('discord.js-commando');
const discord = require('discord.js');
const superagent = require("superagent");

class CatCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "cat",
            group: "simple",
            memberName: "cat",
            description: "Posts a random cat."
        });

    }

    async run(message, args)
    {
        let msg = await message.channel.send("Generating...")
        
        let {body} = await superagent
        .get("http://aws.random.cat/meow")
        //console.log(body.file)
        if(!{body}) return message.channel.send("Failed to grab an image, please try again!")
      
      const cEmbed = new discord.RichEmbed()
      .setColor("#ff6666")
      .setImage(body.file)
      .setAuthor("Random Cat", message.guild.iconURL)
      .setFooter("Strawbi")
      
      message.channel.send({embed: cEmbed})
      msg.delete();

    
    }

}

module.exports = CatCommand;
