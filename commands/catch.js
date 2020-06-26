const commandInfo = {
    name: 'catch',
    category: 'Pokemon',
    aliases: [
      'guess'
    ]
}

const botCommandExport = `fs.readFile('./data/guilds/' + message.guild.id + '.json', 'utf8', (err, data) => {
    if (err) { }
    if (!data) { }
    var data = JSON.parse(data)
    if (data.channelspawns.find(chn => chn.channel === message.channel.id) === -1) {
        message.channel.send({
            embed: {
                "description": "There are no spawned Pokemon in this channel!",
                "color": colors.red
            }
        })
    } else {
        if (!data.channelspawns.find(chn => chn.channel === message.channel.id)) {
            message.channel.send({
                embed: {
                    "description": "There are no spawned Pokemon in this channel!",
                    "color": colors.red
                }
            })
            return;
        }
        fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, udata) => {
            if (err) { }
            if (udata) {
                var udata = JSON.parse(udata)
                if (udata.start) {
                    if (udata.start === true) {
                        if (args.join(' ').toLowerCase() === data.channelspawns.find(chn => chn.channel === message.channel.id).pokemon.toLowerCase()) {
                            const cLvl = rNum(1, 40)
                            var pdata = pokemon.find(pkmn => pkmn.name === data.channelspawns.find(chn => chn.channel === message.channel.id).pokemon)
                            pdata.level = cLvl
                            pdata.nature = Object.values(natures)[rNum(0, natures.length - 1)]
                            pdata.exp.exp = 0
                            pdata.ivs.hp = rNum(0, 31)
                            pdata.ivs.atk = rNum(0, 31)
                            pdata.ivs.def = rNum(0, 31)
                            pdata.ivs.spatk = rNum(0, 31)
                            pdata.ivs.spdef = rNum(0, 31)
                            pdata.ivs.speed = rNum(0, 31)
                            udata.coins = udata.coins + rNum(0, 5)
                            udata.pokemon.push(pdata)
                            fs.writeFile('./data/users/' + message.author.id + '.json', JSON.stringify(udata), (err, data) => {
                            })
                            message.channel.send({
                                embed: {
                                    "title": "You caught the Pokemon!",
                                    "description": message.author.toString() + ", you just caught a level \`" + cLvl + "\` **" + data.channelspawns.find(chn => chn.channel === message.channel.id).pokemon + "**!",
                                    "color": colors.blurple,
                                    "footer": {
                                        "text": "Use p.info to view it!"
                                    }
                                }
                            })
                            data.channelspawns.splice(data.channelspawns.findIndex(chn => chn.channel === message.channel.id))
                            fs.writeFile('./data/guilds/' + message.guild.id + '.json', JSON.stringify(data), (err, data) => {
                            })
                        }
                    } else {
                        message.channel.send({
                            embed: {
                                "title": "That's not it",
                                "description": "Your guess is incorrect.",
                                "color": colors.red
                            }
                        })
                    }
                }
            } else {
                message.channel.send({
                    embed: {
                        "description": "You haven't started yet!",
                        "color": colors.red,
                        "footer": {
                            "text": "Use p.start <pokemon> to start!"
                        }
                    }
                })
            }
        })
    }
})`

module.exports = {
  info: commandInfo,  
  cmd: botCommandExport
}