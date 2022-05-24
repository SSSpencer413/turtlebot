const fetch = require("node-fetch");

exports.run = async (client, message) => {
    // get a turtle picture
    fetch(`https://source.unsplash.com/featured/?turtle`)
    .then((turtlePicData) => {
        message.reply({
            embeds : [
                {
                    title: "Here is your turtle picture!",
                    image: {url : turtlePicData.url},
                    color: 0x2ECC71,
                    footer: {
                        text : "Images provided by https://unsplash.com"
                    }
                }
            ]
        });
    }).catch(console.error);
}

exports.commandData = {
    name: 'turtlepic',
    description: 'random turtle pic'
};