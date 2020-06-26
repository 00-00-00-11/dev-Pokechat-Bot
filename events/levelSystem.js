const botEventExport = `client.on('message', message => {
    if (message.author.bot) return
    fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, data) => {
        if (err) {}
        if (data) {
            var data = JSON.parse(data)
            if (data.start === true) {
                if (rNum(1, 5) === 1) {
                    const poke = data.pokemon[data.selected]
                    poke.exp.exp = poke.exp.exp + 1
                    if (poke.exp.exp >= poke.exp.expMax) {
                        poke.exp.exp = poke.exp - poke.exp.expMax
                        poke.exp.expMax = poke.exp.expMax + ((poke.exp.expMax * 2) / 5)
                        poke.level = poke.level + 1
                        if (poke.evolutions.find(evo => evo.level)) {
                            if (poke.level === poke.evolutions.find(evo => evo.level).level) {
                                message.channel.send('ok it evo cool')
                            }
                        }
                        message.channel.send({embed: {
                            "title": poke.name + " has leveled up!",
                            "description": "Your " + poke.name + " is now level " + poke.level + "!",
                            "color": colors.blurple,
                            "footer": {
                                "text": "Use p.info to view " + poke.name
                            }
                        }})
                    }
                    data.pokemon[data.selected] = poke
    fs.writeFile('./data/users/' + message.author.id + '.json', JSON.stringify(data), (err, data) => {
        })
                }
            }
        }
    })
})`

module.exports = {
    evt: botEventExport
}