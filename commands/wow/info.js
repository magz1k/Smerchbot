const commando = require('discord.js-commando');
const discord = require('discord.js');

class MyInfoCommand extends commando.Command {
    constructor(client) {
        /*
            Constrcutor class to set the properties of the command. 
        */
        super(client,{
            name: 'info',
            group: 'wow',
            memberName: 'info',
            description: 'Returns information about me.'
        });
    }

    async run(message, args) {
        /*
            This will use discords richembed functions to give a nice look to some information that you put into the embed. 
        */
        var myInfo = new discord.RichEmbed()
            .setTitle('All About Me!') //Sets the main title for the embed. 
            .addField('About Me', 'I am Meeples Bot. A simple discord bot that can run basic commands, and play music.') //Adds a field to the embed. First argument is the title of the field, second is the text you want in the field. 
            .addField('Use', 'The command prefix is \'!\'. Run the command \'!help\' to get a list of commands.')
            .setDescription('Hello, My name is Meeples Bot!') //Sets description of the embed. 
            .setColor('#ff3f3f') //Sets the colour of the embed in hex code. Find a colour hex code generator online. 
            .setThumbnail('http://www.jamesmathe.com/wp-content/uploads/2015/03/meeple-150x150.png') //sets and image for the embed. Address something local, or something found online. 
            .setFooter('Thanks for using this bot! Author: AUTHOR_NAME') //Give a little footer for your embed. 
        message.channel.sendEmbed(myInfo); //This will send the message in the channel without targeting any users specifically. 
    }
}

module.exports = MyInfoCommand;
