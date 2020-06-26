const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

// Load Settings

const settings = require('./data/settings.json')
const prefix = settings.prefix;
const token = settings.token;
const colors = require('./data/colors.json')
if (settings.devMode === true) console.log('\x1b[41m%s\x1b[37m\x1b[0m', '                                                  DEV MODE IS ENABLED                                                 ')

// Create Client

const client = new Discord.Client();

// Load Databases

const { pokemon } = require('./data/databases/pkmnDB.json')
const { natures } = require('./data/databases/natureDB.json')

// Functions

function rNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rString(length) {
    var res = "";
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        var res = res + chars.charAt(rNum(0, chars.length - 1));
    }
    return res;
}

function isDev(userID) {
    if (userID === settings.head_developer) {
        return true;
    } else {
        if (settings.developers.includes(userID)) {
            return true;
        } else {
            return false;
        };
    };
};

// Load & Handle Commands

const cmdDir = './commands';
fs.readdir(cmdDir, (err, commandFiles) => {
    client.on('message', (message) => {
        if (settings.devMode) if (!isDev(message.author.id)) return
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        let args = message.content.slice(prefix.length).trim().split(' ');
        let command = args.shift().toLowerCase();
        for (var pos = 0; pos < commandFiles.length; pos++) {
            const filePath = cmdDir + '/' + commandFiles[pos];
            const cmd = require(filePath);
            if (command === cmd.info.name) {
                eval(cmd.cmd);
                break
            }
            else if (cmd.info.aliases) {
                if (cmd.info.aliases.includes(command)) {
                    eval(cmd.cmd)
                    break
                }
            };
        };
    });
});

// Load & Handle Events

const evtDir = './events';
fs.readdir(evtDir, (err, eventFiles) => {
    console.log("Bot events loaded | " + eventFiles.length + "\n" + eventFiles);

    for (var pos = 0; pos < eventFiles.length; pos++) {
        const filePath = './events/' + eventFiles[pos];
        const evt = require(filePath);
        eval(evt.evt);
    };

});

// Login

client.login(token);