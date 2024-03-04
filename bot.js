
const {Telegraf} = require('telegraf')



const bot  = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
    const botName = ctx.botInfo.first_name;
    const userName = ctx.message.from.first_name;
    ctx.reply(`Hey, ${userName}. My name is ${botName}`)
});
bot.launch().then(r => console.log("bot running"));