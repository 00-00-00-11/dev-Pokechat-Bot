const commandInfo = {
    name: 'pokedex',
    aliases: [
        "poke",
        "dex"
    ],
    category: 'Pokemon'
}

const botCommandExport = `poke = pokemon.find(pkmn => pkmn.name.toLowerCase() === args.join(' ').toLowerCase())
if (poke) {
    var image = poke.img.normal
    if (poke.tags.isShiny === true) {
        var image = poke.img.shiny
    }
    var ptype = "\`[" + poke.types.primary + "]\`"
    if (poke.types.secondary) {
        var ptype = "\`[ " + poke.types.primary + " ] | [ " + poke.types.secondary + " ]\`"
    }
    message.channel.send({
        embed: {
            "author": {
                "name": poke.name
            },
            "color": colors.blurple,
            "title": ptype,
            "description": "\\n\\n**-- Stats**\`\`\`css\\nHP - " + poke.stats.hp + "\\nAtk - " + poke.stats.atk + "\\nDef - " + poke.stats.def + "\\nSp. Atk - " + poke.stats.spatk + "\\nSp. Def - " + poke.stats.spdef + "\\nSpeed - " + poke.stats.speed + "\\n\`\`\`",
            "image": {
                "url": poke.img.normal
            }
        }
    })
} else {
    message.channel.send('Couldn\\'t find this pokemon!')
}`

    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}