const { Client } = require("guilded.js");
const fs = require("fs");
const commandFiles = fs.readdirSync('./guilded/commands').filter(file => file.endsWith('.js'));

const client = new Client({ token: process.env.GUILDEDTOKEN });

exports.run = async () => {
    
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

exports.stats = function() {
    return {
        uptime: client.uptime
    };
}