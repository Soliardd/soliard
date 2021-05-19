const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) {message.channel.send("Bota yazı yazdırmak için **YÖNETİCİ** rolüne sahip olman gerekir.")
        return;
    } else {
        let metin = args.slice(0).join(" ");
        message.channel.send(metin)
    }
}
module.exports.config = {
    name: "yazdır",
    aliases: ["", ""]
}