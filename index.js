const Aoijs = require("aoi.js")
const config = require('./config.json')

const bot = new Aoijs.Bot({
    token: config.token, 
    prefix: config.prefix
})




/*
   [------------------------]
   [       BOT STATUS       ]
   [------------------------]
*/
bot.status({
    text: "Bot Status goes here",
    type: "WATCHING",
    status: "idle"
})




/* 
   [-----------------------]
   [       CALLBACKS       ]
   [-----------------------]
*/
bot.readyCommand({
  channel: '',
  code: `
  $log[
─━━━━━━━━━Your Bot is ready!━━━━━━━━━─
Bot: $userTag[$clientID]
Ping: $ping ms
Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
Commands loaded: $commandsCount
─━━━━━━━━Created by byCRXHIT━━━━━━━━━─]`
})



/* 
   [-----------------------------]
   [       COMMAND HANDLER       ]
   [-----------------------------]
*/
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands to be executed from the "commands" folder