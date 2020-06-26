const commandInfo = {
    name: 'start',
    category: 'Pokemon'
}

const botCommandExport = `fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, data) => {
    if (!data) {
        var poke = pokemon.find(pkmn => pkmn.name.toLowerCase() === args.join(' ').toLowerCase())
        if (poke) {
            if (poke.tags.starter === true) {
                message.channel.send({
                    embed: {
                        "title": "You picked " + poke.name + "!",
                        "color": colors.blurple,
                        "image": {
                            "url": poke.img.normal
                        },
                        "footer": {
                            "text": "Use p.info to view it!"
                        }
                    }
                })
            }  else {
                message.channel.send({
                    embed: {
                        "description": "That's not a starter Pokemon!",
                        "color": colors.red
                    }
                })
                return;
            } 
        } else {
                message.channel.send({
                    embed: {
                        "title": "Starter Pokemon",
                        "color": colors.blurple,
                        "description": "__**Gen I**__\\n\`\`\`css\\nBulbasaur | Charmander | Squirtle\\n\`\`\`",
                        "footer": {
                            "text": "Use p.start <pokemon> to pick a starter"
                        }
                    }
                })
                return
            }
            poke.level = 1
            poke.nature = Object.values(natures)[rNum(0, natures.length - 1)]
            poke.exp.exp = 0
            poke.ivs.hp = rNum(0, 31)
            poke.ivs.atk = rNum(0, 31)
            poke.ivs.def = rNum(0, 31)
            poke.ivs.spatk = rNum(0, 31)
            poke.ivs.spdef = rNum(0, 31)
            poke.ivs.speed = rNum(0, 31)
            fs.writeFile('./data/users/' + message.author.id + '.json', JSON.stringify({ "start": true, "selected": 0, "coins": 10, "pokemon": [poke] }), (err, data) => {
                if (err) console.log(err)
            })
    } else {
        var data = JSON.parse(data)
        if (data.hasOwnProperty('start')) {
            if (data.start) {
                message.channel.send({
                    embed: {
                        "description": "You already started!",
                        "color": colors.red
                    }
                })
            }
        }
    }
})`

    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}