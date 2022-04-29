//SSSpencer413

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});;

client.on("ready", () => {
    console.log("ready!");

    // Check if we've made the setup command before
    client.application?.commands.fetch()
    .then((commands) => {
        if (!commands.find((cmd) => cmd.name === "setup")) {
            client.application?.commands.create({
                name: 'setup',
                description: 'Deploys the bot commands in the guild, use the reset parameter if your commands are not working!',
                options: [{
                    name: 'reset',
                    type: 'BOOLEAN',
                    description: 'Set this to true to reset all commands (you can bring them back with /setup!)',
                    required: false,
                }]
            });
            
            console.log("Created deploy command!");
        }
    })
    .catch(console.error);


});

client.on("interactionCreate", (interaction) => {
    if (interaction.isCommand()) {
        try {
            let command = require(`./commands/${interaction.commandName}.js`);
            command.run(client, interaction);
        } catch (err) {
            console.error(err);
        }
    }
});

client.login(process.env.TOKEN);
