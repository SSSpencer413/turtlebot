//SSSpencer413

const fs = require("fs");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: []});

const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

exports.run = async () => {
    client.on("ready", () => {
        console.log("Discord ready!");
    });
    
    client.on("interactionCreate", (interaction) => {
        if (interaction.isCommand()) {
            try {
                if (commandFiles.includes(`${interaction.commandName}.js`)) {
                    let command = require(`./commands/${interaction.commandName}.js`);
                    command.run(client, interaction);
                }
            } catch (err) {
                console.error(err);
            }
        }
    });

    client.login(process.env.DISCORDTOKEN);
}


exports.stats = function() {
    return {
        uptime: client.uptime
    };
}