const commandInfo = {
    name: 'info',
    category: 'Pokemon'
}

const botCommandExport = `fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, data) => {
  if (err) {}
    if (data) {
      var data = JSON.parse(data)
        if (data.start === true) {
          var id = data.selected
          if (String(args[0]).toLowerCase() === "latest") {
            var id = data.pokemon.length - 1
          }
          if (args[0]) {
            if (!isNaN(args[0])) {
              var id = parseInt(args[0]) - 1
            }
          }
          if (args[0] === "0") {
            message.channel.send({embed: {
              "description": "You don't have any Pokemon by this ID.",
              "color": colors.red
            }})
            return;
          }    
          if (id > data.pokemon.length - 1) {
            message.channel.send({embed: {
              "description": "You don't have any Pokemon by this ID.",
              "color": colors.red
            }})
            return;
          }
            const poke = data.pokemon[id]
            var iv = Object.values(poke.ivs)
            var image = poke.img.normal
            if (poke.tags.isShiny === true) {
              var image = poke.img.shiny
            }
            var ptype = "\`[" + poke.types.primary + "]\`"
            if (poke.types.secondary) {
              var ptype = "\`[ " + poke.types.primary + " ] | [ " + poke.types.secondary + " ]\`"
            }
            message.channel.send({embed: {
              "author": {
                  "name": poke.name
              },
              "color": colors.blurple,
              "title": ptype,
              "description": "**---- Level**: \`" + poke.level + "\` | **EXP**: \`" + Math.round((((poke.exp.exp / poke.exp.expMax) * 100) + Number.EPSILON) * 100) / 100 + "%\`\\n**-- Nature**: \`" + poke.nature.name + "\`\\n**-- Stats**\`\`\`lua\\nHP - " + poke.stats.hp + " | " + poke.ivs.hp + "/31\\nAtk - " + poke.stats.atk + " | " + poke.ivs.atk + "/31\\nDef - " + poke.stats.def + " | " + poke.ivs.def + "/31\\nSp. Atk - " + poke.stats.spatk + " | " + poke.ivs.spatk + "/31\\nSp. Def - " + poke.stats.spdef + " | " + poke.ivs.spdef + "/31\\nSpeed - " + poke.stats.speed + " | " + poke.ivs.speed + "/31\\nTotal IV - " + Math.round((((iv[0] + iv[1] + iv[2] + iv[3] + iv[4] + iv[5]) / 186 * 100) + Number.EPSILON) * 100) / 100 + "%\\n\`\`\`" ,
              "image": {
                  "url": image
              },
              "footer": {
                "text": "ID - " + parseInt(id + 1)
              }
          }})
        }
        } else {
          message.channel.send({embed: {
            "description": "You haven't started yet!",
            "color": colors.red,
            "footer": {
              "text": "Use p.start <pokemon> to start!"
            }
          }})
        }
})`

module.exports = {
  info: commandInfo,  
  cmd: botCommandExport
}