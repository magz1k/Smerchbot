const commando = require('discord.js-commando');
const request = require('request-promise')

class AffixCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'affix',
            group: 'wow',
            memberName: 'affix',
            description: 'Аффикс'
        });
    }

    async run(message , args)
    {
      module.exports = ({ character, realm, region }) => {
      return request.get(`https://raider.io/api/v1/mythic-plus/affixes?region=${region}`) 
      .then(res => {
      const options = {}
      const data = JSON.parse(res)
      const message = data.title

      return [message, options]
    })       
    }
}
module.exports = AffixCommand;
