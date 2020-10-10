const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")

const bot = new discordScript({
  token: "noice",
  prefix: ["$getServerVar[prefix]"]
})

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.Command({
name: command.name,
code: command.code
})
} 
}

bot.Status({
    0: {
        description: "/help | EcoBoT©", 
        type: "PLAYING" 
    }, 
    1: {
        description: "/help | EcoBoT©", 
        type: "LISTENING" 
    }
}, 13000)

bot.Variables({
    prefix: "/",
    cash: "0",
    bank: "0"
})

bot.MessageEvent()

bot.SpaceCommand({
    name: "kappa",
    code: `
    $author[EcoBoT;$client[avatarURL]]
    $color[#0003FF]
    $description[My prefix is \`$getServerVar[prefix]\`. \`$getServerVar[prefix]help\` for list of commands.]
    $onlyIfMessageContains[<@753940433855447070>;<@!753940433855447070>;]
    `
})