const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('Moruk!')
};

exports.config = {
  name: "phentos",
  guildOnly: true,
  aliases: [],
};