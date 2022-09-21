const Discord = require('discord.js')

const TOKEN = "MTAyMTYwMDY3OTU2MDc2MTQ0NQ.GJJQaf.1EGFDVFxdhgqCCiahKQJUhDsXgMnwLAw2LwCyg"

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

client.login(TOKEN)