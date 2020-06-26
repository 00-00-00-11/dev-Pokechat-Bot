const commandInfo = {
    name: 'update',
    category: 'Dev'
}

const botCommandExport = `if (isDev(message.author.id)) {
        //do nothing
}`
    
    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}