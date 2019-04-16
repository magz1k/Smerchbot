const commando = require('discord.js-commando');

class AffCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'aff',
            group: 'simple',
            memberName: 'aff',
            description: 'affixes'
        });
    }

    async run(message, args)
    {
module.exports = ({ character, realm, region }) => {
  return request.get(`https://raider.io/api/v1/mythic-plus/affixes?region=${region}`)
    .then(res => {
      const options = {}
      const data = JSON.parse(res)
      const message = data.title
      return [message, options]
    }
}

module.exports = AffCommand;
