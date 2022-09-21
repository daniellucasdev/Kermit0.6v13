const Discord = require('discord.js')
require('dotenv').config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
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

const welcomeChannelId = '1013982982970802216'

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Bem vindo á essa bosta`,
        files: [img]
    })
})

client.login(process.env.TOKEN)