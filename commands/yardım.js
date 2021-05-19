const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için **YÖNETİCİ** iznine sahip olmalısın!`);
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Yardım Menüsü")
    .setURL("https://discord.gg/zQ9K9SPgd8")
    .setAuthor('SoLiArd', (message.author.displayAvatarURL()), 'https://discord.gg/zQ9K9SPgd8')
    .setDescription('KOMUTLAR')
    .setThumbnail((message.author.displayAvatarURL()), 'https://discord.gg/zQ9K9SPgd8')
    .addField(`Avatar`,`${PREFIX}avatar = komutu ile avatarınızı görebilirsiniz`)
    .addField(`Yazdır`,`${PREFIX}yazdır = komutu ile Bota Yazı Yazdırabilirsiniz`)
    .addField(`Ban`,`${PREFIX}sik @etiket (sebep) = komutu ile sunucudan istediğiniz birisini banlayabilirsiniz`)
    .addField(`Say`,`${PREFIX}say = komutu ile sunucunuzdaki kişi sayısını öğrenebilirsiniz`)
    .addField(`Sil`,`${PREFIX}sil = komutu ile 1-100 arası istediğiniz kadar mesaj silebilirsiniz`)
    .addField(`Yazdır`,`${PREFIX}yazdır (istediğiniz mesaj) = komutu ile bota istediğiniz yazıyı yazdırabilirsiniz`)
 


    .setTimestamp()
message.channel.send(embed)
}

module.exports.config = {
    name: "yardım",
    aliases: ["", ""]
}
