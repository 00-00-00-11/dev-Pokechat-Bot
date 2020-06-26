const commandInfo = {
    name: 'balance',
    category: 'Pokemon',
    aliases: [
        "bal"
    ]
}

const botCommandExport = `fs.readFile('./data/users/' + message.author.id + '.json', 'utf8', (err, data) => {
    if (err) {}
      if (data) {
        var data = JSON.parse(data)
          if (data.start === true) {
            var coins = 0
              if (data.coins) {
                  var coins = data.coins
              }
              message.channel.send({embed: {
                "title": message.author.username + "'s Balance",
                "color": colors.blurple,
                "description": coins.toLocaleString('en') + " PokeCoins",
                "thumbnail": {
                    "url": message.author.avatarURL(true)
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