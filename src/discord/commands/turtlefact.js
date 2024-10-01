//SSSpencer413

const { SlashCommandBuilder, ApplicationIntegrationType, InteractionContextType } = require("discord.js");
var Facts = require("../../shared/turtlefacts.json");

exports.run = async (Client, interaction) => {
    await interaction.defer();
    let fact = Facts[Math.floor(Math.random() * Facts.length)];

    interaction.reply({embeds: [
        {
            footer: {
                text: "Source: " + fact[1],
            },
            title: "Turtle Fact",
            description: fact[0],
            color: 0x2ECC71 
        }
    ]});
};

exports.data = new SlashCommandBuilder()
    .setName('turtlefact')
    .setDescription('Get a random fact about turtles')
    .setIntegrationTypes([ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall])
    .setContexts([InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel]);