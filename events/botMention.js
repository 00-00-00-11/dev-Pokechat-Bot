const botEventExport = `client.on('message', (message) => {
    if (message.content === "<@!686784098479374340>") {
        message.channel.send({embed: {
            "title": "Pokechat",
            "color": Object.values(colors)[rNum(0, Object.values(colors) - 1)],
            "description": "Hello! I'm Pokechat, and my prefix here is [ \`" + settings.prefix + "\` ].\\nUse \`" + settings.prefix + "help\` for help.",
            "thumbnail": {
                "url": client.user.avatarURL(true)
            }
        }})
    }
    return
})`

module.exports = {
    evt: botEventExport
}