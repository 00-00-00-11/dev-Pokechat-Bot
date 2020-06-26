const botEventExport = `client.on('ready', () => {
    var dmode = '​'
    if (settings.devMode) {var dmode = ' [DEV MODE]'}
    client.user.setActivity('Pokemon in ' + client.guilds.cache.size + ' servers!' + dmode, 
    {
        "type": 'PLAYING'
    })
})`
    
    module.exports = {
        evt: botEventExport
    }