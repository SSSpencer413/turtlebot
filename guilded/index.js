const { Client } = require("guilded.js");
const fs = require("fs");
const commandFiles = fs.readdirSync('./guilded/commands').filter(file => file.endsWith('.js'));

process.env.GUILDEDTOKEN = "yW6uiRL3K4Db76Jn8K4jY/owO7GoULN9y4fkiP+GlYto71hiU6Sj+WrfivJ3ftGvwXP/SBM6ZQDa1nCY3sZdcw=="

exports.run = async () => {
    const client = new Client({ token: process.env.GUILDEDTOKEN });
    
    client.on("ready", () => {
        console.log("Guilded ready!");
    });
    
    client.on("messageCreated", (message) => {
        if (message.content.trim().startsWith("/")) {
            let args = message.content.substring(1).trim().split(" ");
            let commandName = args.shift();
            try {
                if (commandFiles.includes(`${commandName}.js`)) {
                    let command = require(`./commands/${commandName}.js`);
                    command.run(client, message, args);
                }
            } catch (err) {
                console.error(err);
            } 
        }
    });
    client.login();


}