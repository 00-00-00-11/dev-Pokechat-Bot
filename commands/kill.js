const commandInfo = {
    name: 'kill',
    category: 'Dev'
}

const botCommandExport = `if (isDev(message.author.id)) {
    message.channel.send("Killing bot process...")
    setTimeout(() => {
        process.exit()
    }, 100)
}`
    
    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}