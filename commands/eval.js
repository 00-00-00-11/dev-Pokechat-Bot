const commandInfo = {
    name: 'eval',
    category: 'Dev'
}

const botCommandExport = `if (isDev(message.author.id)) {
        eval (args.join(' '))
}`
    
    module.exports = {
        info: commandInfo,
        cmd: botCommandExport
}