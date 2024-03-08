const fs = require("fs");
const commandFiles = fs.readdirSync('./guilded/commands').filter(file => file.endsWith('.js'));
const { Embed } = require("guilded.js");

exports.run = async (client, message, args) => {

    var embed = {
        footer: {
            text: "Support Server: https://guilded.gg/i/kJOQ7DRp",

        },
        title: "Commands",
        color: 0x2ECC71, 
        fields: []
    }

    if (args[0] && commandFiles.includes(args[0] + ".js")) {
        try {
            var command = require(`./${args[0]}.js`);
            if (command.commandData) {
                let cmdName = "/"+command.commandData.name;
                if (command.commandData.args) {
                    for (var a of command.commandData.args) {
                        if (a.optional) {
                            cmdName += ` [${a.name}]`;
                        } else {
                            cmdName += ` {${a.name}}`;
                        }
                        
                        embed.fields.push(
                            {
                                name: `${a.name} ${a.optional ? " (optional)" : ""}`,
                                value: a.description,
                            }
                        );
                        
                    }
                }

                embed.title = cmdName;
                embed.description = command.commandData.description;


            } 
        } catch(err) {
            console.error(err);
        }

    } else {
        for (var file of commandFiles) {
            try {
                var command = require(`./${file}`);
                if (command.commandData) {
                    let cmdName = "/"+command.commandData.name;
                    if (command.commandData.args) {
                        for (var a of command.commandData.args) {
                            if (a.optional) {
                                cmdName += ` [${a.name}]`;
                            } else {
                                cmdName += ` {${a.name}}`;
                            }
                        }
                    }
                    embed.fields.push(
                        {
                            name: cmdName,
                            value: command.commandData.description,
                        }
                    );
                }
            } catch(err) {
                console.error(err);
            }
        }
    }

    

    message.reply({
        embeds : [
            embed
        ]
    });
}

exports.commandData = {
    name: 'turtlehelp',
    description: 'provides info on all of the commands',
    args: [
        {
            name: "command", 
            description: "command you want info on", 
            optional: true
        }
    ]
};