const botEventExport = `client.on('message', message => {
    if (message.author.bot) return
    if (rNum(1, 20) === 1) {
        const poke = pokemon[rNum(0, pokemon.length - 1)]
        fs.readFile('./data/guilds/' + message.guild.id + '.json', 'utf8', (err, data) => {
            if (err) { }
            if (!data) {
                var data = JSON.stringify({ "channelspawns": [{ "channel": message.channel.id, "pokemon": poke.name, "spawner": message.author.id, "spawnTime": new Date().getTime() }] })
            } else {
                var data = JSON.parse(data)
                var channel = data.channelspawns.findIndex(chn => chn.channel === message.channel.id)
                if (channel === -1) {
                    var channel = { "channel": message.channel.id, "pokemon": poke.name, "spawner": message.author.id, "spawnTime": new Date().getTime() }
                    data.channelspawns.push(channel)
                    var data = JSON.stringify(data)
                } else {
                    data.channelspawns[channel].channel = message.channel.id
                    data.channelspawns[channel].pokemon = poke.name
                    data.channelspawns[channel].spawner = message.author.id
                    data.channelspawns[channel].spawnTime = new Date().getTime()
                    var data = JSON.stringify(data)
                }
            }
            message.channel.send({
                embed: {
                    "title": "A wild Pokemon has spawned!",
                    "description": "Guess it's name and use p.catch <name>",
                    "color": colors.blurple,
                    "image": {
                        "url": poke.img.normal
                    }
                }
            })
            fs.writeFile('./data/guilds/' + message.guild.id + '.json', data, (err, data) => {
            })
        })
    }
})`

module.exports = {
    evt: botEventExport
}
