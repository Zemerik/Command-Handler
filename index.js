const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client({
 intents: ["Guilds", "GuildMessages", "MessageContent"]
})

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

//Command Handler
const fs = require("fs")
const prefix = "."//Your desired prefix here, pls ensure that it does not contain any spaces. 

client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith('.js'))         // ^ This has to match the name of your folder name, including capitals and spaces
for (file of commands) {
  const commandName = file.split('.')[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on('messageCreate', async (message) => {
      if(message.content.toLowerCase().startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ + /g)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName)
    if(!command) return //If there is not command like that, then the bot simply does nothing. 
    // You can make it return a message or embed, your choice. 
    command.run(client, message, args) //Run the command!
  }
})

client.login('') ///You need to put your bot token here
