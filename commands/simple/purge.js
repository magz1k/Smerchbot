const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            group: 'simple',
            memberName: 'purge',
            description: 'Удаление Сообщений с канала',

            args: [
                {
                    key: 'numToPurge',
                    label: 'number',
                    prompt: 'Для использования введите число больше 0',
                    type: 'integer'
                }
            ]
        });
    }

    run(msg, { numToPurge }) {
        let channel = msg.channel;

        // fail if number of messages to purge is invalid
        if (numToPurge <= 0) {
            return msg.reply('Для использования введите число больше 0');
        }

        // channel type must be text for .bulkDelete to be available
        else if (channel.type === 'text') {
            return channel.fetchMessages({limit: numToPurge})
                .then(msgs => channel.bulkDelete(msgs))
                .then(msgs => msg.reply('Я удалил сообщения'))
                .catch(console.error);
        }
        else {
            return msg.reply('Команда Purge доступна только на Текстовых каналах');
        }
    }
};

module.exports = PurgeCommand