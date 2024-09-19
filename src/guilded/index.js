const { Client } = require("guilded.js");
const fs = require("fs");
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

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

    client.on("botServerCreated", (server, user) => {
        if (server.defaultChannelId) {
            client.channels.fetch(server.defaultChannelId).then((channel) => {
                channel.send({
                    embeds : [
                        {
                            title: `Hello ${server.name}!`,
                            description: `I am TurtleBot! I'm a bot all about turtles! I can give you turtle pictures and turtle facts at request! Thank you <@${user}> for inviting me!`,
                            color: 0x2ECC71 ,
                            fields: [
                                {
                                    name: "Invite Me",
                                    value: "[Guilded](https://www.guilded.gg/b/4d5c37d6-6e0a-4b2e-b95e-a608315fa3ad) or [Discord](https://discord.com/api/oauth2/authorize?client_id=481430759349944330&permissions=412317173824&scope=bot%20applications.commands)", 
                                    inline: true
                                }, 
                                {
                                    name: "Information",
                                    value: "[About Me](https://www.guilded.gg/p/TurtleBot) | [Join My Server](https://guilded.gg/i/kJOQ7DRp)", 
                                    inline: true
                                } 
                            ],
                            footer: {
                                text: "Use `/turtlehelp` to get started!"
                            } 
                        }
                    ]
                });
            }).catch(console.error);
        }
    });

    client.login();
}

exports.stats = function() {
    return {
        uptime: client.uptime
    };
}
