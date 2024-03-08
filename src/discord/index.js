//SSSpencer413

const fs = require("fs");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});

const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

exports.run = async () => {
    client.on("ready", () => {
        
    
        // Republish all of the commands
        client.guilds.cache.each((guild) => {
            let createdCommands = [];
            
            guild.commands.fetch().then((command) => {
                if (command.applicationId == client.application.id && commandFiles.includes(command.name)) {
                    createdCommands.push(command.name + ".js");
                } else if (command.applicationId == client.application.id) {
                    command.delete();
                }
            }).catch(console.error);
    
            for (let file of commandFiles) {
                let command = require(`./commands/${file}`);
    
                if (command.commandData && !createdCommands.includes(file)) {
                    guild.commands.create(command.commandData);
                }
            }
    
        });
    

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
    
    client.on("guildCreate", (guild) =>{
        let createdCommands = [];
            
        guild.commands.fetch().then((command) => {
            if (command.applicationId == client.application.id && commandFiles.includes(command.name)) {
                createdCommands.push(command.name + ".js");
            } else if (command.applicationId == client.application.id) {
                command.delete();
            }
        }).catch(console.error);

        for (let file of commandFiles) {
            let command = require(`./commands/${file}`);

            if (command.commandData && !createdCommands.includes(file)) {
                guild.commands.create(command.commandData);
            }
        }
    });

    client.login(process.env.DISCORDTOKEN);
}


exports.stats = function() {
    return {
        uptime: client.uptime,
        servers: client.guilds.cache.size
    };
}