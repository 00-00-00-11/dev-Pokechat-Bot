const commandInfo = {
    name: 'ping',
    category: 'Other'
}

const botCommandExport = `const pingStart = new Date().getTime()
message.channel.send('Pinging...')
.then(async (msg) => {
  msg.delete()
})
message.channel.send({
    embed: {
    "title": 'Pong! \`' +  (new Date().getTime() - pingStart) + '\`ms',
    "color": colors.green
  }})`


module.exports = {
  info: commandInfo,  
  cmd: botCommandExport
}