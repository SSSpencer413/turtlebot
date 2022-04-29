//SSSpencer413

const https = require("https");

exports.run = async (Client, interaction) => {
    await interaction.defer();

    https.get("https://source.unsplash.com/featured/?turtle", (res) => {
        interaction.reply({embeds: [
            {
                image: {
                    url: res.headers.location
                },
                footer: {
                    text: "Images provided by https://unsplash.com"
                },
                title: "Here is your turtle picture!",
                color: 0x2ECC71 
            }
        ]});
    });
};

exports.commandData = {
    name: 'turtlepic',
    description: 'random turtle pic',
    defaultPermission: true
};