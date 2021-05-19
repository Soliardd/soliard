require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");


const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err)

    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        return console.log("\n[LOG] Ayarlama komutu bulunamadı.")
    }
    console.log(`[LOG] ${files.length} adet ayarlama komutu yükleniyor...\n\n[LOG] AYARLAMA KOMUTLARI`)
    jsFile.forEach((f) => {
        let pull = require(`./commands/${f}`);
        console.log(`———————————————————————\n[LOG] ${pull.config.name}.js => Aktif`)
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
    console.log('———————————————————————\n');
});

bot.on("ready", () => {
    console.log("Johny sins bot sorunsuz bir şekilde çalışıyor");
    //bot.user.setStatus("invisible")
    bot.user.setActivity("Çakır#9458")
    bot.channels.cache.get('843871103344312331').join();
    

});


//mesajların başlangıc bölümü


//mesajların bitiş bölümü
bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(PREFIX)) return;
    let commandFile = bot.commands.get(cmd.slice(PREFIX.length)) || bot.commands.get(bot.aliases.get(PREFIX.length))
    if (commandFile) commandFile.run(bot, message, args)
});


bot.login(TOKEN)
