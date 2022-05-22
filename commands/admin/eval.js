module.exports = {
    name: 'eval',
    code: `
          $eval[$message]
          $argsCheck[>1;Usage: !eval <aoi.js code to execute>]
          $onlyForIDs[$botOwnerID;❌ | You're not allowed to use this command!]
          `
}