//SSSpencer413

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

exports.commandData = {
    name: 'turtlefact',
    description: 'random turtle fact',
    defaultPermission: true
};