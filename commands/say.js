const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
     const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild; //faysy
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`)
    
        .addField(`<a:mag_right:771416107000922173> **__Sunucudaki Toplam Üye Sayısı__**`,`  **\`\`\`${message.guild.memberCount}\`\`\`**  `)
    
        .addField(`<a:mag_right:771416107000922173> **__Seslideki Üye Sayısı__**`,`  **\`\`\`${count}\`\`\`**  `)
    
       
   
       .setTitle(`<a:small_orange_diamond:771414619776352277> ${message.author.tag} - Tarafından istendi.`)
    .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
        .setFooter(`SoliArd Was Here`, bot.user.avatarURL)
    message.channel.send(embed);

} 


module.exports.config = {
    name: "say",
    aliases: ["", ""]
}