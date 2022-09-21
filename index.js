const Discord = require('discord.js')
require('dotenv').config()

const TOKEN = "MTAyMTYwMDY3OTU2MDc2MTQ0NQ.G8H-lP.nP1IndjmlV9-1qdaIPmRql0zZL3ayPcxGv3x0c"

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.on('ready', () => {
    console.log(`Logado como ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == 'hi') {
        message.reply('Salve')
    }
})

client.login(process.env.TOKEN)