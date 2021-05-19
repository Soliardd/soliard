const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Mesajları Yönet` İzni sende yok.**'));
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Silinecek miktar giriniz.'));
    if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('Mesaj silme limiti **1-100"" arasındadır.'));
    message.channel.bulkDelete(args[0]);
    return message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar! '+`${args[0]}`+' adet mesaj silindi.')).then(m => m.delete({timeout: 5000}));
    };
module.exports.config = {
    name: "sil",
    aliases: ["", ""]
}