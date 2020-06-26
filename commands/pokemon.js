const commandInfo = {
    name: 'pokemon',
    category: 'Pokemon'
}

const botCommandExport = `fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, data) => {
  if (err) { }
  if (data) {
    var data = JSON.parse(data)
    if (data.start === true) {
      var fPkmn = []
      var page = 20
      var onP = 1
      if (args[0]) {
        if (!isNaN(args[0])) {
          var page = parseInt(args[0]) * 20
          var onP = args[0]
        }
      }
      if (String(onP) === "0") {
        message.channel.send({
          embed: {
            "title": "Pokemon",
            "description": "There are no Pokemon on this page.",
            "color": colors.red
          }
        })
        return;
      }
      if (Math.ceil(page / 20) > Math.ceil(data.pokemon.length / 20)) {
        message.channel.send({
          embed: {
            "title": "Pokemon",
            "description": "There are no Pokemon on this page.",
            "color": colors.red
          }
        })
        return;
      }
      if (args.join(' ')) {
        const filter = args.join(' ').split("?").reverse()[0].split(' ')
        switch (filter[0]) {
          case "name": {
            message.channel.send("Filter by Name")
            for (var pos = 0; pos < data.pokemon.length; pos++) {
              if (data.pokemon[pos].name.toLowerCase() === filter[1].toLowerCase()) {
                fPkmn.push(data.pokemon[pos])
              }
            }
          }
            break;
          case "type": {
            message.channel.send("Filter by Type")
            for (var pos = 0; pos < data.pokemon.length; pos++) {
              if (data.pokemon[pos].types.primary) {
              if (data.pokemon[pos].types.primary.toLowerCase() === filter[1].toLowerCase()) {
                fPkmn.push(data.pokemon[pos])
              }
            }
            if (data.pokemon[pos].types.secondary) {
              if (data.pokemon[pos].types.secondary.toLowerCase() === filter[1].toLowerCase()) {
                fPkmn.push(data.pokemon[pos])
              }
             }
            }
          }
        }
      }
      var msg = ""
      for (var pos = page - 20; pos < data.pokemon.length; pos++) {
        var poke = data.pokemon[pos]
        if (fPkmn) {
          for (var pos1 = 0; pos < fPkmn.length; pos1++) {
            if (fPkmn[pos1].name.toLowerCase() === data.pokemon[pos].name.toLowerCase()) {
              continue;
            } else {
              data.pokemon.splice(pos)
            }
          }
        }
        var iv = Object.values(poke.ivs)
        var msg = msg + "[\` " + poke.name + " \`] | **IV**: \`" + Math.round((((iv[0] + iv[1] + iv[2] + iv[3] + iv[4] + iv[5]) / 186 * 100) + Number.EPSILON) * 100) / 100 + "%\` | **ID**: \`" + parseInt(pos + 1) + "\`\\n"
        if (pos === page - 1) break;
      }
      message.channel.send({
        embed: {
          "title": "Pokemon",
          "color": colors.blurple,
          "description": msg,
          "footer": {
            "text": "Page " + onP + "/" + Math.ceil(fPkmn.length / 20)
          }
        }
      })
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
})`

    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}