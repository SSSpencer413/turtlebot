const fetch = require("node-fetch");

exports.run = async (client, message) => {
    /* // get a turtle picture
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
  */

  let turtles = [
    "https://images.unsplash.com/photo-1612352402177-587118a4bdcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHVydGxlfHx8fHx8MTY2ODIyODg5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1616511058611-1f949140d1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHVydGxlfHx8fHx8MTY1NzY5NDQ2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1566468161466-ce3a186a6a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHVydGxlfHx8fHx8MTY1NDgxNjQyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1588361732179-2092cb8b37fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHVydGxlfHx8fHx8MTY1MjYzMDA1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1580603474920-aa3332b2c40f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dHVydGxlfHx8fHx8MTY1MjYzNzQ4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  ];
  
  message.reply({
            embeds : [
                {
                    title: "Here is your turtle picture!",
                    image: {url : turtles[Math.floor(Math.random() * (turtles.length))]},
                    color: 0x2ECC71,
                    footer: {
                        text : "NOTE: Turtle pictures are temporarily limited right now as we transition APIs"
                    }
                }
            ]});
  
}

exports.commandData = {
    name: 'turtlepic',
    description: 'random turtle pic'
};