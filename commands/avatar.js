const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(
new Discord.MessageEmbed()
.setColor("#fd8f8f")
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setDescription(`${target} kullanıcısının avatarı.`)                     
.setTitle('Avatar')
.setFooter("SoLiArd Was Here")
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));               
}; 
module.exports.config = {
  name: "avatar",
  aliases: ["", ""]
}
