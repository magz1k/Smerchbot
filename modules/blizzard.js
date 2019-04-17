const request = require('request-promise');

module.exports = {
    generateToken: async function (message) {
        await request({
                method: `POST`,
                uri: `https://us.battle.net/oauth/token`,
                auth: {
                    user: `6a94092259714386ac594049aed31681`,
                    pass: `LAumdiVzCui0hiPiRVj5hLqj2e3619DV`
                },
                formData: {
                    grant_type: `client_credentials`
                },
                json: true
            })
            .then((body) => {
                if (body.error)
                    return message.client.logger.error(body.error_description);
                message.client.btoken = body.access_token;
                message.client.expires = Date.now() + (body.expires_in * 1000);
                return;
            })
            .catch(e => message.client.logger.error(e))
    },

    checkToken: async function (message) {
        const now = Date.now();

        if (message.client.expires !== undefined && message.client.expires > now) {
            return;
        } else {
            await module.exports.generateToken(message);
        }
    },

    guild: {
        getMembers: async function (message) {
            await module.exports.checkToken(message);
            const data = []
            await request({
                    uri: `https://us.api.blizzard.com/wow/guild/suramar/Hold%20My%20Brewski`,
                    json: true,
                    qs: {
                        access_token: message.client.btoken,
                        fields: `members`
                    }
                })
                .then(async (response) => {
                    if (response.error)
                        return message.client.logger.error(response.error_description);
                    const members = await Promise.all(
                        response.members.map(async member => {
                            await data.push(`${member.character.name}[${member.character.level}]`);
                        })
                    );
                })
                .catch(e => message.client.logger.error(e.message))
            return data;
        },

        getAchievements: async function (message) {
            await module.exports.checkToken(message);

            const data = []

            await request({
                    uri: `https://us.api.blizzard.com/wow/guild/suramar/Hold%20My%20Brewski`,
                    json: true,
                    qs: {
                        access_token: message.client.btoken,
                        fields: `achievements`
                    }
                })
                .then(async (response) => {
                    if (response.error)
                        return message.client.logger.error(response.error_description);

                    const achievements = await Promise.all(
                        response.achievements.achievementsCompleted.map(achievementId =>
                            request({
                                uri: `https://us.api.blizzard.com/wow/achievement/${achievementId}`,
                                json: true,
                                qs: {
                                    access_token: message.client.btoken
                                }
                            })
                            .then(async (response) => {
                                await data.push(response.title);
                            })
                            .catch(e => message.client.logger.error(e.message))
                        )
                    );
                })
                .catch(e => message.client.logger.error(e.message))
            return data;
        },
    }
}
