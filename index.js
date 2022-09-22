const Discord = require('discord.js')
require('dotenv').config()

const generateImage = require("./generateImage")
const generateImageE = require("./generateImageE")

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
        content: `<@${member.id}> Bem vindo à essa bosta`,
        files: [img]
    })
})

client.on("guildMemberRemove", async (member) => {
    const imgE = await generateImageE(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Foi jogar no Vasco (saiu do server)`,
        files: [imgE]
    })
})

client.login(process.env.TOKEN)