const commandInfo = {
    name: 'help',
    category: 'Other'
}

const botCommandExport = `if (!args[0]) {
  message.channel.send({
          embed: {
              "title": "Help",
              "color": colors.blurple,
              "description": "p.\`help pokemon\` - Get help with pokemon related commands.\\np.\`help other\` - Get help with other commands."
          }
  })
} else if (args[0].match(new RegExp('pokemon|other', 'i'))) {
  switch (args[0]) {
      case "pokemon".toLowerCase():
      message.channel.send({embed: {
          "title": "Help - Pokemon",
          "color": colors.blurple,
          "description": "p.\`start\` - **pick a starter Pokemon and start playing!**\\np.\`info <id>\` - **View the selected/<id> Pokemon.**\\np.\`pokemon <page>\` - **Displays your pokemon (on <page>).**"
      }});
      break;
      case "other".toLowerCase():
      message.channel.send({embed: {
              "title": "Help - Other",
              "color": colors.blurple,
              "description": "p.\`ping\` - **Get bot response time.**"
      }});
  }
} else {
  message.channel.send({
      embed: {
          "title": "Help",
          "author": {
              "name": "That\'s not a help category!"
          },
          "color": colors.blurple,
          "description": "p.\`help pokemon\` - Get help with pokemon related commands.\\np.\`help other\` - Get help with other commands."
      }
})
}`
module.exports = {
  info: commandInfo,  
  cmd: botCommandExport
}